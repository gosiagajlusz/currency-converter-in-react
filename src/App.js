import "./App.css";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import { currencies } from "./currencies";

function App() {
  const [amount, setAmount] = useState(0);

  const onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(`${amount}`);
    // console.log(`${currency}`);
    calculateResult(currency, amount);
  };

  const [currency, setCurrency] = useState(currencies[0].name);
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const [result, setResult] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = currencies
    .find(({ name }) => name === currency).rate;

    setResult ({
      amount: +amount,
targetAmount: amount*rate,

    });
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
        result={result}
        calculateResult={calculateResult}
      ></Form>
            
    </Container>
  );
}

export default App;
