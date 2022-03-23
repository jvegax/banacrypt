import { useEffect, useState } from "react";
import "animate.css"

const CalculatorResult = ({ coinA, coinB }) => {
  const [result, setResult] = useState(0);

  const getResult = async () => {
    const API_KEY =
      "d42299a74a9a833934c98b492e0004c8a45d48e93830f5d1136f78679546a12d";
    const urlA = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinA}&tsyms=USD&api_key=${API_KEY}`;
    const urlB = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinB}&tsyms=USD&api_key=${API_KEY}`;

    const [resA, resB] = await Promise.all([fetch(urlA), fetch(urlB)]);
    const [dataA, dataB] = await Promise.all([resA.json(), resB.json()]);

    const { CIRCULATINGSUPPLY } = dataA.RAW[`${coinA}`].USD;
    const { MKTCAP } = dataB.RAW[`${coinB}`].USD;

    setResult((MKTCAP / CIRCULATINGSUPPLY).toFixed(2));
  };

  useEffect(() => {
    getResult();
  }, [result]);

  return (
    <>
      <p className="w-1/3"></p>
      <div className="bg-indigo-500 w-1/3 hover:bg-indigo-700 p-6 animate__animated animate__pulse animate__infinite uppercase rounded-full text-white font-bold">
        <p>
          The price of {coinA} with the market cap of {coinB}
        </p>
        <p>
          <span className="text-red-200 text-2xl">${result}</span>
        </p>
      </div>
    </>
  );
};

export default CalculatorResult;
