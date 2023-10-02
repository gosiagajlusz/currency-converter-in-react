import "./style.css";
import { currencies } from "../currencies";

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
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form__section">
        <label className="form__label">
          <p className="form__labelText">Wpisz kwotę</p>

          <input
            className="form__input"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w złotówkach"
            type="number"
            step="0.01"
            min="0.1"
            required
          />
        </label>
      </div>

      <div className="form__section">
        <label className="form__label">
          <p className="form__labelText">Wybierz walutę</p>
          <select
            className="form__input"
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
      <div className="form__section">
        <div className="form__sectionForButton">
          <button type="submit" className="form__button">
            Przelicz!
          </button>
        </div>
      </div>
      {/* {result && (
        <p className="form__result">
          Kwota w złotówkach: <strong>{result.targetAmount.toFixed(2)} </strong>
        </p>
      )} */}
    </form>
  );
};

export default Form;
