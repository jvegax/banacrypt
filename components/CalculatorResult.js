import { useEffect } from "react";
import { gql } from "@apollo/client";

import "animate.css";

const FIND_COIN_BY_NAME = gql`
  query ($coinName: String!) {
    findCoinByName(name: $coinName) {
      circulatingSupply
      marketCap
    }
  }
`;

const CalculatorResult = ({ coinA, coinB, setResult, children }) => {
  const getResult = async () => {
    const API_KEY = process.env.API_KEY;
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
  }, [coinA, coinB]);

  return (
    <>
      <p className="w-1/3"></p>
      <div className="bg-indigo-500 w-1/3 hover:bg-indigo-700 p-6 animate__animated animate__pulse animate__infinite uppercase rounded-full text-white font-bold">
        <p>
          The price of {coinA} with the market cap of {coinB}
        </p>
        <p>
          <span className="text-red-200 md:text-2xl text-lg">${children}</span>
        </p>
      </div>
    </>
  );
};

export default CalculatorResult;
