import { currencies } from "../currencies";
import { useState } from "react";
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

const Form = ({}) => {
  const [amount, setAmount] = useState(0);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const [currency, setCurrency] = useState(currencies[0].name);
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      amount: +amount,
      targetAmount: amount * rate,
    });
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
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
          <Select value={currency} onChange={onSelectChange}>
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
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
      <ResultWrapper>
        {result && (
          <ParagraphResult>
            Kwota w złotówkach:{" "}
            <strong>{result.targetAmount.toFixed(2)} </strong>
          </ParagraphResult>
        )}
      </ResultWrapper>
    </FormWrapper>
  );
};

export default Form;
