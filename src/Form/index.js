import "./style.css";

const Form = () => {
  return (
    <form className="form" action="https://postman-echo.com/get">
      <fieldset className="form__fieldset">
        <div className="form__section">
          <span className="form__labelText"> Kwota </span>
          <div className="form__inputSelect">
            <input
              className="form__money"
              name="money"
              type="number"
              step="0.01"
              min="1"
              required
            />
            <select className="form__currencyType" name="currency">
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
            </select>
          </div>
        </div>
       

        <div className="form__sectionForButton">
          <button type="submit" className="form__button">
            Przelicz!
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
