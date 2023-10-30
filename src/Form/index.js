
import { useFetchData } from './useFetchData';
import { useEffect } from 'react';
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
   StyledDate
} from './styled';
import { useState } from 'react';

const Form = (props) => {
   const { ratesData } = useFetchData();
   const [result, setResult] = useState(null);
   const [currency, setCurrency] = useState("EUR");
   const [amount, setAmount] = useState('');

   const calculatedResult = (amount, currency) => {
      const rate = ratesData.data.data[currency].value;

      setResult({
         sourceAmount: +amount,
         targetAmount: amount * rate,
         currency,
      });
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculatedResult(amount, currency)
   };
   const [myDate, setMyDate] = useState(new Date());
    
    useEffect(() => {
     setMyDate(
       new Date(!!ratesData.data && ratesData.data.last_updated_at)
     )
    },[ratesData]);

    const formattedTime = myDate.toLocaleDateString(
      undefined,
      { 
          month: "2-digit",
          day: "2-digit", 
          year: "numeric",
      },
    )

   return (
      <StyledForm onSubmit={onFormSubmit}>
         {ratesData.status === "loading" ? (
            <StyledLoading>
               Pobieranie kursów walut
            </StyledLoading>
         ) : ratesData.status === "error" ? (
            <StyledError>
               Ups, coś poszło nie tak...
            </StyledError>
         ) : (
            <StyledFieldset>
               <StyledLegend>Sprawdź ile to złotówek</StyledLegend>
               {props.children}
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
                  <StyledSelect value={currency} onChange={(event) => setCurrency(event.target.value)}>

                     {Object.keys(ratesData.data.data).map(((currency) => (
                        <option key={currency} value={currency}>
                           {currency}
                        </option>
                     )))}
                  </StyledSelect>
               </StyledLabel>
               </StyledDiv>
               <StyledButton type="submit">Oblicz</StyledButton>
               <StyledResult>  Wynik: {result ? `${amount} PLN = ${result.targetAmount.toFixed(2)} ${currency}` : "Brak wyniku"}</StyledResult>
               <StyledDate>
                  Kursy walut pobierane są z Europejskiego Banku Centralnego. 
                  <br />Aktualne na dzień: <b>{formattedTime}</b>
                </StyledDate>
            </StyledFieldset>
         )}
      </StyledForm>
   );
};

export default Form;


//zakomentowane do testu

// import { useState, useEffect, Fragment } from "react";
// import {
//   FormWrapper,
//   Section,
//   ButtonWrapper,
//   Label,
//   Paragraph,
//   Button,
//   Input,
//   Select,
//   ResultWrapper,
//   Loading,
//   Failure,
//   ParagraphResult,
//   Date
// } from "./styled";
// import { useRatesData } from "./useRatesData";

// const Form = () => {
//   const ratesData = useRatesData();
//   const [currency, setCurrency] = useState("USD");
//   const [result, setResult] = useState(null);
//   const [amount, setAmount] = useState("");
//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     calculateResult(currency, amount);
//   };

//   const calculateResult = (currency, amount) => {
//     const rate = ratesData.rates[currency];
//     //nie wiem,czy na koncu ma byc .value czy nie
//     setResult({
//       amount: +amount,
//       targetAmount: amount * rate,
//       currency,
//     });
//   };

//   return (
//     <FormWrapper onSubmit={onFormSubmit}>

//     {ratesData.state === "Loading"
//                 ? (
//                     <Loading>
//                         <br />Ładuję aktualne kursy  walut...
//                     </Loading>
//                 )
//                 : (
//                     ratesData.state === "error" ? (
//                         <Failure>
//                             Hmm...  Cos poszlo nie tak, Wystąpił jakiś błąd 😞, Sprawdź czy masz polaczenia z internetem, Jeśli tak to sprobuj póżniej...
//                         </Failure>
//                     ) : (
//                         <Section>
//                             <p>
//                                 {ratesData.state === "succes" && ratesData.date && (
//                                     <Date>Kurs walut pobierany z currencyapi.com Aktualne na dzien {ratesData.date.toLocaleDateString()}</Date>
//                                 )}
//                                 <label>
//                                     <Paragraph> Kwota </Paragraph>

//                                     <Input
//                                         value={amount}
//                                         onChange={({ target }) => setAmount(target.value)}
//                                         required
//                                         type="number"
//                                         min="0.01"
//                                         step="any"
//                                         placeholder="PLN" />
//                                 </label>
//                             </p>
//                             <p>
//                                 <label>
//                                     <Paragraph> Waluta:</Paragraph>
//                                     <Input as="select"
//                                         value={currency}
//                                         onChange={({ target }) => setCurrency(target.value)}
//                                     >
//                                         {Object.keys(ratesData.rates).map((currency => (
//                                             <option
//                                                 key={currency}
//                                                 value={currency}
//                                             >
//                                                 {currency}
//                                             </option>
//                                         )))}

//                                     </Input>
//                                 </label>
//                             </p>

//                             <p>
//                                 <Button>Oblicz</Button>
//                             </p>
//                             <ResultWrapper>
//                 {result && (
//                   <ParagraphResult>
//                      Kwota w złotówkach:{" "}
//                      <strong>{result.targetAmount.toFixed(2)} </strong>
//                    </ParagraphResult>
//                  )}
//                </ResultWrapper>
//                             {/* <Clock
//                             /> */}

//                         </Section>
//                     )
//                 )};

//         </FormWrapper>

//     );
// };


// export default Form;    



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


