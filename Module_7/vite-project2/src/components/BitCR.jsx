import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitCR() {

  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinRate, setBitcoinRate] = useState('');


  // useEffect(() => {
  //   let ignore = false;

  //   console.log("running effect");
  //   console.log(currency + " is my currency");

  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json.bitcoin)
  //       console.log(json.bitcoin[currency.toLowerCase()])
  //       setBitcoinRate(json.bitcoin[currency.toLowerCase()])

  //       if (!ignore) setBitcoinRate (json.bitcoin[currencry.toLowerCase()])

  //     })

  //   return () => {
  //     ignore = true;
  //     console.log("cleanup complete");

  //   };
  // }, [currency]);


  let btcResponse = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
  const btcPrice = btcResponse.bitcoin ? btcResponse.bitcoin[currency.toLowerCase()] : ''

     console.log(btcResponse.bitcoin)
  // console.log(btcResponse.bitcoin[currency.toLowerCase()])

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitCR componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div/>

      <label>Valued at: {btcPrice} {currency}</label>

    </div>
  );
}

export default BitCR;
