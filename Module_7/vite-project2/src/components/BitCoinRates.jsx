import { useState, useEffect } from "react";

  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

  function BitCoinRates() {
    
    const [currency, setCurrency] = useState('usd');

    useEffect(() => {
        console.log ("running effect");
        let ignore = false;
        console.log(currency);

       let fetchUrl = "https://api.allorigins.win/get?url=https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}"
        // console.log(fetchUrl)
        fetch(fetchUrl)
    
          //.then((response) => response.json())
          .then((response) => {
            console.log(response)
          // if (!ignore) setCurrency (response.error ? response.error : response.activity);
          }); 

          return () => {
            ignore = true;
            console.log('cleanup complete');
        };
      }, [currency]);

    const options = currencies.map((curr) => (
      <option value={curr} key={curr}>
        {curr}
      </option>
    ));

    return (

      <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
        <label>
          Choose currency:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {options}
          </select>
        </label>
      </div>

    );
  }

export default BitCoinRates
