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

        const {data, meta} = await response.json();

        setRatesData({
          status: "success",
          data,
          meta,
        });
        //tutaj chyba podawanie, że ma dac currency, a nie ogolnikowo,ze data spowodowalo błąd
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

//zakomentowane do testu
// const URL= "https://api.currencyapi.com/v3/latest?apikey=cur_live_NZ7GkaDNppJmHTw2AFyWLQO9jf0rOtdaJYc32yg2&currencies=EUR%2CUSD%2CCAD&base_currency=PLN"

// export const useRatesData= ()=>{

// const [ratesData, setRatesData] = useState({
//   state: "Loading",
// });

// useEffect(() => {
//   const fetchRates = async () => {
//     try {
//       const response = await fetch(URL
//       );

//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       const { rates, date } = await response.json();
//       setRatesData({
//         state: "success",
//         rates,
//         date,
//       });
//     } catch {
//       setRatesData({
//         state: "Error",
//       });
//     }
//   };

//   setTimeout(fetchRates,1000);
// },[]);
// return ratesData;
// };
