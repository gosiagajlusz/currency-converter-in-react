import "./style.css";

const Result = ({calculateResult, result})=>{
return (<div className="result">
<p className="result__paragraph">
  Kwota w złotówkach: <strong>{result.targetAmount} </strong>
</p>
</div>)

}

export default Result;