import { useEffect } from "react";

import "animate.css";


const CalculatorResult = ({ coinA, coinB, setResult, children }) => {
  const getResult = () => {
    setResult((coinB.marketCap / coinA.circulatingSupply).toFixed(2));
  };

  useEffect(() => {
    getResult();
  }, [coinA, coinB]);

  return (
    <>
      <p className="w-1/3"></p>
      <div className="bg-indigo-500 w-1/3 hover:bg-indigo-700 p-6 animate__animated animate__pulse animate__infinite uppercase rounded-full text-white font-bold">
        <p>
          The price of {coinA.name} with the market cap of {coinB.name}
        </p>
        <p>
          <span className="text-red-200 md:text-2xl text-lg">${children}</span>
        </p>
      </div>
    </>
  );
};

export default CalculatorResult;
