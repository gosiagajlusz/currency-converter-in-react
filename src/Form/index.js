import "./style.css";

const Form = ({ onFormSubmit, amount, setAmount }) => {
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
              onChange={({target})=>setAmount(target.value)}
              //   name="money"
              //   type="number"
              //   step="0.01"
              //   min="1"
              //   required
            />
            <select className="form__currencyType" name="currency">
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
            </select>
            {/* </div> */}

            <button type="submit" className="form__button">
              Przelicz!
            </button>
          </label>
        </div>

        {/* <div className="form__sectionForButton"> */}

        {/* </div> */}
      </fieldset>
    </form>
  );
};

export default Form;
