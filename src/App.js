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
  };

  const [currency, setCurrency] = useState("EUR");
  const onSelectChange = ({ target }) => setCurrency(target.value);

    
    const currencies = [
      { id: "EUR", rate: 4.48 },
      { id: "USD", rate: 4.08 },
      { id: "CHF", rate: 4.57 },
    ];
  

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
