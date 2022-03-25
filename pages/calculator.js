import { useState } from "react";

import Layout from "../components/Layout";
import Image from "next/image";
import CoinList from "../components/CoinList";
import CalculatorResult from "../components/CalculatorResult";

import "animate.css";

const Calculator = ({ coinRanking }) => {
  const [coinA, setCoinA] = useState("");
  const [coinB, setCoinB] = useState("");
  const [result, setResult] = useState(0);

  const swapCoins = () => {
    setCoinA(coinB)
    setCoinB(coinA)
  }

  console.log(coinRanking)

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

            <div className="text-center font-bold text-gray-700">
              <label htmlFor="selectA">Select A</label>
            </div>

            <select
              onChange={(e) => setCoinA(e.target.value)}
              id="selectA"
              className="form-select appearance-none
              shadow-lg
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      mb-2
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <CoinList coinRanking={coinRanking} />
            </select>
          </div>
        </div>

        <div className="text-center mb-4">
          <Image
            onClick={ swapCoins }
            layout="fixed"
            width="35px"
            height="35px"
            src="/calculator.png"
          />
        </div>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="text-center font-bold text-gray-700">
              <label htmlFor="selectB">Select B</label>
            </div>
            <select
              onChange={(e) => setCoinB(e.target.value)}
              id="selectB"
              className="form-select appearance-none
              shadow-lg
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      mb-2
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <CoinList coinRanking={coinRanking} />
            </select>
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

  console.log(coinRanking)

  return {
    props: {
      coinRanking
    },
  };
}

export default Calculator;
