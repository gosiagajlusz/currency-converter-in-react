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
            <p className="form__labelText">Kwota </p>
            {/* <div className="form__inputSelect"> */}
            <input
              className="form__money"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              // placeholder="Wpisz kwotę w złotówkach"

              //   name="money"
              type="number"
              step="0.01"
              //   min="1"
              required
            />
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
            {/* </div> */}

            <button type="submit" className="form__button">
              Przelicz!
            </button>

            {/* <textarea {money}/> */}
          </label>
        </div>

        {/* <div className="form__sectionForButton"> */}

        {/* </div> */}

        {/* <p>Kwota w złotówkach:</>
         */}
      </fieldset>
    </form>
  );
};

export default Form;
