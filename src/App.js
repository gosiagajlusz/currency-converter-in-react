import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import { currencies } from "./currencies";
import Clock from "./Clock";
import Result from "./Result";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";

const Container = styled.main`
  margin: 30px auto;
  background-color: ${({ theme }) => theme.colors.lightMint};
  border-radius: 8px;
  max-width: 500px;
  padding: 20px 20px 40px 20px;
  box-shadow: 2px 2px rgb(161, 160, 160);
  color:  ${({ theme }) => theme.colors.navyBlue};
`;

function App() {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Clock />
        <Header />
        <Form
          onFormSubmit={onFormSubmit}
          amount={amount}
          setAmount={setAmount}
          currency={currency}
          setCurrency={setCurrency}
          onSelectChange={onSelectChange}
          result={result}
          calculateResult={calculateResult}
        />
        <Result
          result={result}
          calculateResult={calculateResult}
          amount={amount}
          setAmount={setAmount}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
