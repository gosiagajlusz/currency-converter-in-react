import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  margin: 0 auto;
  grid-gap: 10px;
  align-items: center;
  min-height: 400px;
`;

export const StyledFieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-content: center;
  justify-items:center;
  padding: 15px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.coldGreen};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledLegend = styled.legend`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const StyledLabel= styled.label`
display:grid;
grid-gap:10px;
align-content: center;

`

export const StyledInput = styled.input`
  padding: 5px 5px;
  width: 80%;
`;

export const StyledSelect = styled.select`
  padding: 5px 5px;
  width: 80%;
`;

export const StyledDiv = styled.div`
display:grid;
grid-template-columns: 1fr auto;
grid-gap:15px;
justify-content: center;
`


export const StyledButton = styled.button`
  padding: 8px 5px 8px 5px;
  margin: 5px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.coldGreen};
  border: none;
  color: hsl(205, 28%, 80%);
  width:90%;

  &:hover {
    background-color: hsl(159, 56%, 24%);
  }
  &:active {
    background-color: hsl(159, 56%, 30%);
  }
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: brightness(140%);
    color: ${({ theme }) => theme.colors.white};
    scale: 1.05;
  }
  &:active {
    filter: brightness(160%);
    ${({ theme }) => theme.colors.concrete};
  }
`;

export const StyledResult = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryColor};
  padding: 5px;
  margin: 10px 0;
  text-decoration: solid;
  font-size: 20px;
  width: 90%;
  margin: 15px;
`;

export const StyledError = styled.p`
  color: ${({ theme }) => theme.colors.cherry};
  text-align: center;
  font-size: 30px;
`;

export const StyledLoading = styled.p`
  color: ${({ theme }) => theme.colors.coldGreen};
  text-align: center;
  font-size: 30px;
`;

export const  StyledDate = styled.p`
  color: ${({ theme }) => theme.colors.coldGreen};
  text-align: center;
`

//zakomentowane do testu

// export const FormWrapper = styled.form`
//   margin: 0 auto;
//   display: grid;
//   grid-gap: 10px;
//   align-items: center;
// `;

// export const Section = styled.div`
//   display: grid;
//   grid-template-columns: 1fr auto;
//   grid-gap: 10px;
//   justify-content: center;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const ButtonWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
// `;

// export const Label = styled.label`
//   display: grid;
//   grid-template-columns: 1fr auto;
//   justify-content: center;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const Paragraph = styled.p`
//   padding: 5px;
//   margin: 5px;
//   color:  ${({ theme }) => theme.colors.navyBlue};
//   font-weight: bold;
// `;

// export const Button = styled.button`
//   padding: 8px 5px 8px 5px;
//   margin: 5px;
//   border-radius: 4px;
//   background-color: ${({ theme }) => theme.colors.coldGreen};
//   border: none;
//   color: hsl(205, 28%, 80%);

//   &:hover {
//     background-color: hsl(159, 56%, 24%);
//   }
//   &:active {
//     background-color: hsl(159, 56%, 30%);
//   }
// `;

// export const Input = styled.input`
//   padding: 5px;
//   margin: 5px;
// `;

// export const Select = styled.select`
//   padding: 5px;
//   margin: 5px;
// `;

// export const ResultWrapper = styled.div`
//   padding: 20px;
//   min-height: 70px;
// `;

// export const ParagraphResult = styled.p`
//   text-align: center;
//   margin: 0px;
// `;

// export const Loading = styled.p `
//   color: ${({ theme }) => theme.colors.coldGreen};
// `
// export const Failure = styled.p `
//   color: ${({ theme }) => theme.colors.cherry};
// `

// export const Date = styled.p `
//   color: ${({ theme }) => theme.colors.coldGreen};

// `
