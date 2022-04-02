import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import RankingList from "../components/RankingList";

const GET_RANKING = gql`
  query {
    getRanking {
      id
      name
      fullName
      price
      change24h
      marketCap
      circulatingSupply
      imageUrl
    }
  }
`;

const Ranking = () => {
  const { loading, error, data } = useQuery(GET_RANKING);

  return (
    <Layout page="Ranking">
      <div className="text-center m-8">
        <h1 className="font-bold text-gray-800 text-xl">
          Ranking by market cap
        </h1>
      </div>

      {loading ? (
        <div className="text-center m-4 bg-indigo-600 rounded-xl p-2">
          <p className="font-bold text-white text-xl">Loading...</p>
        </div>
      ) : !loading && !error ? (
        <RankingList coinRanking={data.getRanking} />
      ) : (
        <div className="text-center m-4 bg-red-500 rounded-xl p-2">
          <p className="font-bold text-white text-xl">
            Ops... something is not working! Try again later
            { console.log(error) }
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Ranking;
