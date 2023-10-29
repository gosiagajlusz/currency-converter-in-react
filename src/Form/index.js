import { useState, useEffect, Fragment } from "react";
import Clock from "../Clock";
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
  Date
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const ratesData = useRatesData();
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const [amount, setAmount] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];
    //nie wiem,czy na koncu ma byc .value czy nie
    setResult({
      amount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>

    {ratesData.state === "Loading"
                ? (
                    <Loading>
                        <br />Ładuję aktualne kursy  walut...
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Hmm...  Cos poszlo nie tak, Wystąpił jakiś błąd 😞, Sprawdź czy masz polaczenia z internetem, Jeśli tak to sprobuj póżniej...
                        </Failure>
                    ) : (
                        <Section>
                            <p>
                                {ratesData.state === "succes" && ratesData.date && (
                                    <Date>Kurs walut pobierany z currencyapi.com Aktualne na dzien {ratesData.date.toLocaleDateString()}</Date>
                                )}
                                <label>
                                    <Paragraph> Kwota </Paragraph>

                                    <Input
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        required
                                        type="number"
                                        min="0.01"
                                        step="any"
                                        placeholder="PLN" />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <Paragraph> Waluta:</Paragraph>
                                    <Input as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.data).map((currency => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}

                                    </Input>
                                </label>
                            </p>

                            <p>
                                <Button>Oblicz</Button>
                            </p>
                            <ResultWrapper>
                {result && (
                  <ParagraphResult>
                     Kwota w złotówkach:{" "}
                     <strong>{result.targetAmount.toFixed(2)} </strong>
                   </ParagraphResult>
                 )}
               </ResultWrapper>
                            <Clock
                            />

                        </Section>
                    )
                )};

        </form >

    );
};


export default Form;    



//kopia przez czyszczeniem
// {/* <FormWrapper onSubmit={onFormSubmit}>
//       <Section>
//       {ratesData.state === "loading" ? (
//         <Loading>
//           Chwilka...
//           <br />
//           Ładuję kursy walut z Europejskiego Banku Centralnego
//         </Loading>
//       ) : ratesData.state === "error" ? (
//         <Failure>
//           Coś nie działa. Sprawdź, czy masz połączenie z internetem.
//         </Failure>
//       ) : 
        
//         ratesData.state === "success" ? (
//           <>

//         {/* <Date>Kurs walut pobierany
//            z currencyapi.com Aktualne na dzien
//             {ratesData.date.toLocaleDateString()}</Date>
//      */}
//           <Section>
//             <Label>
//               <Paragraph>Wpisz kwotę</Paragraph>
//               <Input
//                 value={amount}
//                 onChange={({ target }) => setAmount(target.value)}
//                 placeholder="Wpisz kwotę w złotówkach"
//                 type="number"
//                 step="0.01"
//                 min="0.1"
//                 required
//               />
//             </Label>
//           </Section>
//           <Section>
//             <Label>
//               <Paragraph>Wybierz walutę</Paragraph>
//               <Select
//                 value={currency}
//                 onChange={({ target }) => setCurrency(target.value)}
//               >
//                 {Object.keys(ratesData.data).map((currency) => (
//                   <option key={currency} value={currency}>
//                     {currency}
//                   </option>
//                 ))}
//               </Select>
//             </Label>
//           </Section>
//           <Section>
//             <ButtonWrapper>
//               <Button type="submit">Przelicz!</Button>
//             </ButtonWrapper>
//           </Section>
//           <Section>
//             <Label>
//               <ResultWrapper>
//                 {result && (
//                   <ParagraphResult>
//                     Kwota w złotówkach:{" "}
//                     <strong>{result.targetAmount.toFixed(2)} </strong>
//                   </ParagraphResult>
//                 )}
//               </ResultWrapper>
//             </Label>
//           </Section>
//         </>)}
//         </Section>

//     </FormWrapper>
//   );
// }; */}


