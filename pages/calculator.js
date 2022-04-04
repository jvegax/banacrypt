import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

import Layout from "../components/Layout";
import CoinList from "../components/CoinList";
import CalculatorResult from "../components/CalculatorResult";

import "animate.css";

const GET_RANKING = gql`
  query {
    getRanking {
      id
      name
      fullName
      price
      change24h
      marketCap
      circulatingSupply
      imageUrl
    }
  }
`;

const Calculator = () => {
  const [coinA, setCoinA] = useState("");
  const [coinB, setCoinB] = useState("");
  const [result, setResult] = useState(0);

  const {
    loading: loadRanking,
    error: errorRanking,
    data: dataRanking,
  } = useQuery(GET_RANKING);

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

            {loadRanking ? (
              <div className="text-center m-4 bg-indigo-600 rounded-xl p-2">
                <p className="font-bold text-white text-xl">Loading...</p>
              </div>
            ) : !loadRanking && !errorRanking ? (
              <CoinList
                coinRanking={dataRanking.getRanking}
                setCoinA={setCoinA}
                setCoinB={setCoinB}
                coinA={coinA}
                coinB={coinB}
              />
            ) : (
              <div className="text-center m-4 bg-red-500 rounded-xl p-2">
                <p className="font-bold text-white text-xl">
                  Ops... something is not working! Try again later
                  {console.log(error)}
                </p>
              </div>
            )}
          </div>
        </div>

        {coinA && coinB && (
          <div className="text-center m-8 flex text-sm">
            <CalculatorResult coinA={coinA} coinB={coinB} setResult={setResult}>
              {result}
            </CalculatorResult>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Calculator;
