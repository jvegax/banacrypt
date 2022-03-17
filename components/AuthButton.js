import React from "react";

const AuthButton = ({connect}) => {
  return (
    <div className="flex">
      <img className="grow-4" width={198} src="/metamask-logo.png" />
      <button
        className="bg-purple-600 hover:bg-purple-800 p-4 rounded-lg text-white text-2xl font-semibold"
        onClick={connect}
      >
        Connect wallet
      </button>
    </div>
  );
};

export default AuthButton;
