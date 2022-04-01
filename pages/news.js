import React from "react";
import Layout from "../components/Layout";
import Article from "../components/Article";

import { gql, useQuery } from "@apollo/client";

const LATEST_NEWS = gql`
  query {
    getNews {
      title
    }
  }
`;

const News = ({ news }) => {
  try {
    const { data } = useQuery(LATEST_NEWS);
    console.log(data.getNews);
  } catch (error) {
    console.log(error);
  }
  
  return (
    <>
      <Layout page="News" />

      <h1 className="text-xl  text-center text-gray-800 font-bold m-8">
        The latest news about crypto!
      </h1>

      <div className="grid grid-cols-1 gap-3 text-center m-8 md:grid-cols-3">
        {news.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const API_KEY = process.env.API_KEY;
  const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      news: data.Data,
    },
  };
}

export default News;
