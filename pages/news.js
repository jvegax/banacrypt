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
  const { data } = useQuery(LATEST_NEWS);
  const articles = []

  try {
    articles = data.getNews;
  } catch (error) {
    console.log(error)
  }
  
  if (!articles) {
    return null;
  }

  return (
    <>
      <Layout page="News" />

      <h1 className="text-xl  text-center text-gray-800 font-bold m-8">
        The latest news about crypto!
      </h1>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 text-center m-8 md:grid-cols-3">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p>Loading ... </p>
      )}
    </>
  );
};

export default News;
