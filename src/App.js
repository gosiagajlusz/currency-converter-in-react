import "./App.css";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const currencies = [
    { name: "EUR", rate: 4.48 },
    { name: "USD", rate: 4.08 },
    { name: "CHF", rate: 4.57 },
  ];

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`${amount}`);
    console.log(`${currency}`);
    // calculateResult(currency, amount);
  };

  const [currency, setCurrency] = useState(currencies[0].name);
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const [result, setResult] = useState(0);

  // const calculateResult = (currency, amount) => {
  //   let rate = currencies.find(({ name }) => name === currency).rate;

  //   setResult = amount / rate;
  //   return result

  // };

  return (
    <Container>
      <Header></Header>

      <Form
        onFormSubmit={onFormSubmit}
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        setCurrency={setCurrency}
        onSelectChange={onSelectChange}
      ></Form>
      <Result 
      // calculateResult={calculateResult}
      >
        
      </Result>
      <p> </p>
    </Container>
  );
}

export default App;
