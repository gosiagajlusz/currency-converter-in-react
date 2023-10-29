import { useState, useEffect, Fragment } from "react";
import {
  FormWrapper,
  Section,
  ButtonWrapper,
  Label,
  Paragraph,
  Button,
  Input,
  Select,
  ResultWrapper,
  Loading,
  Failure,
  ParagraphResult,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [result, setResult] = useState(null);
  const ratesData = useRatesData();
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency].value;
    setResult({
      amount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      {ratesData.state === "loading" ? (
        <Loading>
          Chwilka...
          <br />
          Ładuję kursy walut z Europejskiego Banku Centralnego
        </Loading>
      ) : ratesData.state === "error" ? (
        <Failure>
          Coś nie działa. Sprawdź, czy masz połączenie z internetem.
        </Failure>
      ) : (
        <Fragment>
          <Section>
            <Label>
              <Paragraph>Wpisz kwotę</Paragraph>
              <Input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wpisz kwotę w złotówkach"
                type="number"
                step="0.01"
                min="0.1"
                required
              />
            </Label>
          </Section>
          <Section>
            <Label>
              <Paragraph>Wybierz walutę</Paragraph>
              <Select
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(ratesData.data).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Select>
            </Label>
          </Section>
          <Section>
            <ButtonWrapper>
              <Button type="submit">Przelicz!</Button>
            </ButtonWrapper>
          </Section>
          <Section>
            <Label>
              <ResultWrapper>
                {result && (
                  <ParagraphResult>
                    Kwota w złotówkach:{" "}
                    <strong>{result.targetAmount.toFixed(2)} </strong>
                  </ParagraphResult>
                )}
              </ResultWrapper>
            </Label>
          </Section>
        </Fragment>
      )}
    </FormWrapper>
  );
};

export default Form;
