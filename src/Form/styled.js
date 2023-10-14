import styled from "styled-components";

export const FormWrapper = styled.form`
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  align-items: center;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Paragraph = styled.p`
  padding: 5px;
  margin: 5px;
  color: #113850;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 8px 5px 8px 5px;
  margin: 5px;
  border-radius: 4px;
  background-color: #10382a;
  border: none;
  color: hsl(205, 28%, 80%);

  &:hover {
    background-color: hsl(159, 56%, 24%);
  }
  &:active {
    background-color: hsl(159, 56%, 30%);
  }
`;

export const Input = styled.input`
  padding: 5px;
  margin: 5px;
`;

export const Select = styled.select`
  padding: 5px;
  margin: 5px;
`;