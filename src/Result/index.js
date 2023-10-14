import { ResultWrapper, Paragraph } from "./styled";

const Result = ({ result, calculateResult, targetAmount }) => {
  return (
    <ResultWrapper>
      {result && (
        <Paragraph>
          Kwota w złotówkach: <strong>{result.targetAmount.toFixed(2)} </strong>
        </Paragraph>
      )}
    </ResultWrapper>
  );
};
export default Result;
