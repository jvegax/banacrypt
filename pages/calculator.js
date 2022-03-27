import { useState } from "react";

import Layout from "../components/Layout";
import CoinList from "../components/CoinList";
import CalculatorResult from "../components/CalculatorResult";

import "animate.css";

const Calculator = ({ coinRanking }) => {
  const [coinA, setCoinA] = useState("");
  const [coinB, setCoinB] = useState("");
  const [result, setResult] = useState(0);


  return (
    <Layout page="Calculator">
      <div className="m-4 mt-10">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="text-center text-gray-800 mb-8 font-bold text-3xl">
              <h1>
                Show the <span className="text-indigo-600">price</span> of{" "}
                <span className="text-indigo-600">A</span>
              </h1>
              <h1>
                with the <span className="text-indigo-600">market cap</span> of{" "}
                <span className="text-indigo-600">B</span>
              </h1>
            </div>

            
            <CoinList coinRanking={coinRanking} setCoinA={setCoinA} setCoinB={setCoinB} coinA={coinA} coinB={coinB}/>
          </div>
        </div>

        <div className="text-center m-8 flex text-sm">
          { (coinA !== "" && coinB !== "") ? (
            <CalculatorResult coinA={coinA} coinB={coinB} setResult={setResult}>{result}</CalculatorResult>
          ) : (
            <>
              <div className="w-1/3"></div>
              <button className="bg-indigo-500 w-1/3 hover:bg-indigo-700 animate__animated animate__pulse animate__infinite p-5 uppercase rounded-full text-white font-bold">
                Select 2 coins
              </button>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const API_KEY =
    "d42299a74a9a833934c98b492e0004c8a45d48e93830f5d1136f78679546a12d";
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD&api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const coinRanking = data.Data;

  return {
    props: {
      coinRanking
    },
  };
}

export default Calculator;
