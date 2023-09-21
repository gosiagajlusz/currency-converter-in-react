import "./style.css";

const Form = ()=>{


    return (
<form className="form" action="https://postman-echo.com/get">
        <fieldset className="form__fieldset">
          <label>
            <span className="form__labelText"> Kwota </span>
            <input
              name="money"
              className="form__money js-form__money"
              type="number"
              step="0.01"
              min="1"
              required
            />
          </label>
          <label>
            <select className="form__currencyType js-currency" name="currency">
              <option value="euro">euro</option>
              <option value="dolar">dolar</option>
              <option value="frank szwajcarski">frank szwajcarski</option>
            </select>
          </label>

          <p>
            <button type="submit" className="form__button">
              Przelicz!
            </button>
          </p>
        </fieldset>
      </form>)
}

export default Form;