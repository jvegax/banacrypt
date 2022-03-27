import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import Image from "next/Image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CoinList = ({ coinRanking, setCoinA, setCoinB, coinA, coinB }) => {
  const [selectedA, setSelectedA] = useState(coinRanking[2]);
  const [selectedB, setSelectedB] = useState(coinRanking[0]);

  useEffect(() => {
    setCoinA(coinRanking[2].CoinInfo.Name);
    setCoinB(coinRanking[0].CoinInfo.Name);
  }, []);

  const swapCoins = () => {
    setCoinA(coinB);
    setCoinB(coinA);
  };

  return (
    <>
      {/* COIN A */}
      <div className="text-center font-bold text-gray-700">
        <label htmlFor="selectA">Select A</label>
      </div>
      <Listbox value={selectedA} onChange={setSelectedA}>
        {({ open }) => (
          <>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <img
                    src={`https://cryptocompare.com/${selectedA.DISPLAY.USD.IMAGEURL}`}
                    alt=""
                    className="flex-shrink-0 h-6 w-6 rounded-full"
                  />
                  <span className="ml-3 block truncate">
                    {selectedA.CoinInfo.FullName}{" "}
                    <span className="text-gray-500">
                      {selectedA.CoinInfo.Name}
                    </span>
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {coinRanking.map((coin) => (
                    <Listbox.Option
                      key={coin.CoinInfo.Id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={coin}
                    >
                      {({ selected, active }) => (
                        <>
                          <div
                            className="flex items-center"
                            onClick={() => setCoinA(coin.CoinInfo.Name)}
                          >
                            <img
                              src={`https://cryptocompare.com/${coin.DISPLAY.USD.IMAGEURL}`}
                              alt=""
                              className="flex-shrink-0 h-6 w-6 rounded-full"
                            />
                            <span
                              className={classNames(
                                selectedA ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {coin.CoinInfo.FullName}{" "}
                              <span className="text-gray-500">
                                {coin.CoinInfo.Name}
                              </span>
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      <div className="text-center mb-4 mt-4">
        <Image
          onClick={swapCoins}
          layout="fixed"
          width="35px"
          height="35px"
          src="/calculator.png"
        />
      </div>

      {/* COIN B */}
      <div className="text-center font-bold text-gray-700">
        <label htmlFor="selectA">Select B</label>
      </div>
      <Listbox value={selectedB} onChange={setSelectedB}>
        {({ open }) => (
          <>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <img
                    src={`https://cryptocompare.com/${selectedB.DISPLAY.USD.IMAGEURL}`}
                    alt=""
                    className="flex-shrink-0 h-6 w-6 rounded-full"
                  />
                  <span className="ml-3 block truncate">
                    {selectedB.CoinInfo.FullName}{" "}
                    <span className="text-gray-500">
                      {selectedB.CoinInfo.Name}
                    </span>
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {coinRanking.map((coin) => (
                    <Listbox.Option
                      key={coin.CoinInfo.Id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={coin}
                    >
                      {({ selected, active }) => (
                        <>
                          <div
                            className="flex items-center"
                            onClick={() => setCoinB(coin.CoinInfo.Name)}
                          >
                            <img
                              src={`https://cryptocompare.com/${coin.DISPLAY.USD.IMAGEURL}`}
                              alt=""
                              className="flex-shrink-0 h-6 w-6 rounded-full"
                            />
                            <span
                              className={classNames(
                                selectedB ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {coin.CoinInfo.FullName}{" "}
                              <span className="text-gray-500">
                                {coin.CoinInfo.Name}
                              </span>
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default CoinList;
