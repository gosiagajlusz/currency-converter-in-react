import { useEffect, useState } from "react";

const URL= "https://api.currencyapi.com/v3/latest?apikey=cur_live_NZ7GkaDNppJmHTw2AFyWLQO9jf0rOtdaJYc32yg2&currencies=EUR%2CUSD%2CCAD&base_currency=PLN"

export const useRatesData= ()=>{

const [ratesData, setRatesData] = useState({
  state: "Loading",
});

useEffect(() => {
  const fetchRates = async () => {
    try {
      const response = await fetch(URL
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const { rates, date } = await response.json();
      setRatesData({
        state: "success",
        rates,
        date,
      });
    } catch {
      setRatesData({
        state: "Error",
      });
    }
  };

  setTimeout(fetchRates,1000);
},[]);
return ratesData;
};
