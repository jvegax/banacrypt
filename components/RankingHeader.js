import React from "react";

const RankingHeader = () => {
  return (
    <>
      <div className="font-bold border border-1 flex border-purple-100 p-4">
        <p className="text-center grow w-1">#</p>
        <p className="grow w-16">Name</p>
        <p className="grow w-5">Price</p>
        <p className="grow w-5">24h %</p>
        <p className="grow w-5">Market Cap</p>
        <p className="grow w-5">Circulating Supply</p>
      </div>
    </>
  );
};

export default RankingHeader;
