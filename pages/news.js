import React from "react";
import Layout from "../components/Layout";
import Article from "../components/Article";

import { gql, useQuery } from "@apollo/client";

const LATEST_NEWS = gql`
  query {
    getNews {
      imageUrl
      source
      title
      body
      url
    }
  }
`;

const News = () => {
  const { loading, error, data } = useQuery(LATEST_NEWS);

  return (
    <>
      <Layout page="News" />

      <h1 className="text-xl  text-center text-gray-800 font-bold m-8">
        The latest news about crypto!
      </h1>

      {loading ? (
        <div className="text-center m-4 bg-indigo-600 rounded-xl p-2">
          <p className="font-bold text-white text-xl">Loading...</p>
        </div>
      ) : !loading && !error ? (
        <div className="grid grid-cols-1 gap-3 text-center m-8 md:grid-cols-3">
          {data.getNews.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center m-4 bg-red-500 rounded-xl p-2">
          <p className="font-bold text-white text-xl">
            Ops... something is not working! Try again later
          </p>
        </div>
      )}
    </>
  );
};

export default News;
