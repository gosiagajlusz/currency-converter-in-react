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
  color:  ${({ theme }) => theme.colors.navyBlue};
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 8px 5px 8px 5px;
  margin: 5px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.coldGreen};
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

export const ResultWrapper = styled.div`
  padding: 20px;
  min-height: 70px;
`;

export const ParagraphResult = styled.p`
  text-align: center;
  margin: 0px;
`;



export const Loading = styled.p `
color:teal;
`
export const Failure = styled.p `
color:red;
`