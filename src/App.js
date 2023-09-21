import "./App.css";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`${amount}`);
    console.log(`${currency}`);
    console.log(`${calculateResult}`);
  };

  const [currency, setCurrency] = useState("EUR");
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const calculateResult = (rate, amount) => {
    const eurRate = 4.48;
    const usdRate = 4.08;
    const chfRate = 4.57;

    switch (rate) {
      case "EUR":
        return {amount} * eurRate;

      case "USD":
        return {amount} * usdRate;

      case "CHF":
        return {amount} * chfRate;
    }
  };

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
      <Result></Result>
      <p> </p>
    </Container>
  );
}

export default App;
