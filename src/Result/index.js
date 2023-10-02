import "./style.css";
const Result = ({ result, calculateResult, targetAmount }) => {
  return (
    <div className="result">
      {result && (
        <p className="result__paragraph">
          Kwota w złotówkach: <strong>{result.targetAmount.toFixed(2)} </strong>
        </p>
      )}
    </div>
  );
};
export default Result;
