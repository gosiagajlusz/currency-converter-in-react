import "./style.css";
import { currencies } from "../currencies";

const Form = ({
  onFormSubmit,
  amount,
  setAmount,
  currency,
  setCurrency,
  onSelectChange,
  result,
  calculateResult,
}) => {
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <div className="form__section">
          <label>
            <p className="form__labelText">Wpisz kwotę w złotówkach</p>

            <input
              className="form__money"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w złotówkach"
              type="number"
              step="0.01"
              required
            />
            </label>
            </div>
            
            <div className="section">
            <p className="form__labelText">Wybierz walutę</p>
            <label>
            <select
              className="form__currencyType"
              value={currency}
              onChange={onSelectChange}
            >
              {currencies.map((currency) => (
                <option key={currency.name} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </select>
            </label>
            </div>

            <button type="submit" className="form__button">
              Przelicz!
            </button>

            {/* <textarea {money}/> */}
          
        

        {/* <div className="form__sectionForButton"> */}

        {/* </div> */}

        {/* <p>Kwota w złotówkach:</>
         */}
      </fieldset>
    </form>
  );
};

export default Form;
