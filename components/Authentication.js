import { useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { connector } from "../config/web3";
import AuthButton from "./AuthButton";


const Authentication = () => {

  const { activate, active, deactivate, account, error, chainId } =
    useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", true);
    
  }, [activate]);

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") {
      connect();
      
    }
  }, [connect]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");

  };


  const buttonColor = "bg-purple-600 hover:bg-purple-800 p-4 rounded-lg text-white text-2xl font-semibold mt-10";
  return (
    <div className="m-10 p-4">
      {error ? (
        <>
          <p className="mt-8  text-white font-bold p-2 text-xl rounded-lg bg-red-700">
            Error : {error.message}
          </p>
          <button
            className={buttonColor}
            onClick={connect}
          >
            Connect your metamask
          </button>
        </>
      ) : active ? (
        <>
          
          <div className="mt-10">
          <button
            className={buttonColor}
            onClick={disconnect}
          >
            Disconnet wallet
          </button>
            <p className="text-xl text-center font-bold">
              Your wallet : <span className="text-orange-600">{account}</span>
            </p>
            <p className="text-xl text-center font-bold">
              You are connected to Network with id : {chainId}
            </p>
          </div>
        </>
      ) : (
        <AuthButton connect={connect} />
      )}
    </div>
  );
};

export default Authentication;
