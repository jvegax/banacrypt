import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const Calculator = () => {

  // https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD

  return (
    <Layout page="Calculator">
      <div className="m-4 mt-10">
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <div className="text-center text-gray-800 mb-8 font-bold text-3xl">
              <h1>
                Show the price of <span className="text-indigo-600">A</span>
              </h1>
              <h1>
                with the market cap of{" "}
                <span className="text-indigo-600">B</span>
              </h1>
            </div>

            <label for="selectA">Select A</label>
            <select
              id="selectA"
              class="form-select appearance-none
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
              <option selected>...</option>
              <option value="BTC">
                Bitcoin
              </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <Image
            layout="fixed"
            width="35px"
            height="35px"
            src="/calculator.png"
          />
        </div>

        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label for="selectA">Select B</label>
            <select
              id="selectB"
              class="form-select appearance-none
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calculator;
