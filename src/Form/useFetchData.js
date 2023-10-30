import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
    data: null,
  });

  const urlApi =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_NZ7GkaDNppJmHTw2AFyWLQO9jf0rOtdaJYc32yg2&currencies=EUR%2CUSD%2CCAD&base_currency=PLN";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlApi);

        if (!response.ok) {
          throw new Error(response.status.Text);
        }

        const { data, meta } = await response.json();

        setRatesData({
          status: "success",
          data,
          meta,
        });
      } catch (error) {
        setRatesData({
          status: "error",
          data: null,
        });
      }
    };

    setTimeout(fetchData, 2000);
  }, []);

  return { ratesData };
};
