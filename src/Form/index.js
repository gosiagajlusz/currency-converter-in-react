import { currencies } from "../currencies";
import {
  FormWrapper,
  Section,
  ButtonWrapper,
  Label,
  Paragraph,
  Button,
  Input,
  Select
} from "./styled";

const Form = ({
  onFormSubmit,
  amount,
  setAmount,
  currency,
  setCurrency,
  onSelectChange,
  targetAmount,
  result,
  calculateResult,
}) => {


  
  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Section>
        <Label>
          <Paragraph>Wpisz kwotę</Paragraph>

          <Input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w złotówkach"
            type="number"
            step="0.01"
            min="0.1"
            required
          />
        </Label>
      </Section>

      <Section>
        <Label>
          <Paragraph>Wybierz walutę</Paragraph>
          <Select
            value={currency}
            onChange={onSelectChange}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </Select>
        </Label>
      </Section>
      <Section>
        <ButtonWrapper>
          <Button type="submit">Przelicz!</Button>
        </ButtonWrapper>
      </Section>
    </FormWrapper>
  );
};

export default Form;