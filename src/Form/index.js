import { useFetchData } from "./useFetchData";
import { useEffect } from "react";
import {
  StyledButton,
  StyledFieldset,
  StyledForm,
  StyledInput,
  StyledLegend,
  StyledResult,
  StyledSelect,
  StyledError,
  StyledLoading,
  StyledDiv,
  StyledLabel,
  StyledDate,
} from "./styled";
import { useState } from "react";

const Form = (props) => {
  const { ratesData } = useFetchData();
  const [result, setResult] = useState(null);
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const calculatedResult = (amount, currency) => {
    const rate = ratesData.data[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedResult(amount, currency);
  };
  const [myDate, setMyDate] = useState(new Date());

  useEffect(() => {
    setMyDate(new Date(!!ratesData.meta && ratesData.meta.last_updated_at));
  }, [ratesData]);

  const formattedTime = myDate.toLocaleDateString(undefined, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <StyledForm onSubmit={onFormSubmit}>
      {ratesData.status === "loading" ? (
        <StyledLoading>Pobieram kursy walut🙂 </StyledLoading>
      ) : ratesData.status === "error" ? (
        <StyledError>
          Ups, coś poszło nie tak...
          <br />
          Sprawdź,czy masz połączenie z internetem😉{" "}
        </StyledError>
      ) : (
        <StyledFieldset>
          <StyledLegend>Sprawdź ile to pieniędzy</StyledLegend>
          <StyledDiv>
            <StyledLabel>
              Wpisz kwotę w PLN:
              <StyledInput
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                type="number"
                min="1"
                step="any"
                placeholder="Kwota w PLN"
                required
              />
            </StyledLabel>
            <StyledLabel>
              Wybierz walutę:
              <StyledSelect
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
              >
                {Object.keys(ratesData.data).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>
          </StyledDiv>
          <StyledButton type="submit">Oblicz</StyledButton>
          <StyledResult>
            {" "}
            {result
              ? `${amount} PLN = ${result.targetAmount.toFixed(2)} ${currency}`
              : "N/A"}
          </StyledResult>
          <StyledDate>
            Kursy walut pobierane są z Europejskiego Banku Centralnego.
            <br />
            Aktualne na dzień: <b>{formattedTime}</b>
          </StyledDate>
        </StyledFieldset>
      )}
    </StyledForm>
  );
};
export default Form;
