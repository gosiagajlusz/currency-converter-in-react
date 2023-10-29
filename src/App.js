import Header from "./Header";
import Form from "./Form";
import Clock from "./Clock";
import Result from "./Form";
import { useState } from "react";
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
  color: ${({ theme }) => theme.colors.navyBlue};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Clock />
        <Header />
        <Form>
          <Result></Result>
        </Form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
