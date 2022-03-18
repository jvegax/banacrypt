import React from "react";
import Layout from "../components/Layout";
import Article from "../components/Article";

const News = ({ news }) => {
  return (
    <>
      <Layout page="News" />

      <h1 className="text-xl  text-center text-gray-800 font-bold m-8">The latest news about crypto!</h1>

      <div className="grid grid-cols-1 gap-3 text-center m-8 md:grid-cols-3">
        {news.map((article) => (
          <Article 
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const API_KEY =
    "d42299a74a9a833934c98b492e0004c8a45d48e93830f5d1136f78679546a12d";
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
