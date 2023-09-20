
import './App.css';
import Container from "./Container";

function App() {
  return (
    <Container>

        <form className="form js-form" action="https://postman-echo.com/get">


            <fieldset className="form__fieldset">
                <legend className="form__legend">Sprawdź ile to złotówek</legend>
                <label>
                    <span className="form__labelText"> Kwota </span>
                    <input name="money" className="form__money js-form__money" type="number" step="0.01" min="1" required />
                </label>
                <label>
                    <select className="form__currencyType js-currency" name="currency">
                        <option value="euro">euro</option>
                        <option value="dolar">dolar</option>
                        <option value="frank szwajcarski">frank szwajcarski</option>
                    </select>
                </label>

                <p>
                    <button type="submit" className="form__button">Przelicz!</button>
                </p>
                <p className="form__result">
                    Kwota w złotówkach: <strong className="js-valueInPln">N/A</strong>
                </p>
            </fieldset>
        </form>
    </Container>

  );
}

export default App;
