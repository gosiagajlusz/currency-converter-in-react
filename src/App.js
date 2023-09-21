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
  };

  const [name, setName] = useState("");
  const onTestFormSubmit = (event) => {
    event.preventDefault();
    console.log(`wysłano ${name}`);
  };

  return (
    <Container>
      <Header></Header>

      <Form
        onFormSubmit={onFormSubmit}
        amount={amount}
        setAmount={setAmount}
      ></Form>
      <Result></Result>
    </Container>
  );
}

export default App;
