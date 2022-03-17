import React from "react";
import Layout from "../components/Layout";

const Error404 = () => {
  return (
    <Layout>
      <div className="text-center mt-14">
        <h1 className="font-bold text-3xl text-gray-700">
          Opps... maybe you need to connect your wallet?
        </h1>
      </div>
    </Layout>
  );
};

export default Error404;
