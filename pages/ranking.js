import Layout from "../components/Layout";
import RankingList from "../components/RankingList";

const Ranking = ({ coinRanking }) => {
  return (
    <Layout page="Ranking">
      <div className="text-center m-8">
        <h1 className="font-bold text-gray-800 text-xl">Ranking by market cap</h1>
      </div>
     
      <RankingList coinRanking={coinRanking} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const API_KEY = "d42299a74a9a833934c98b492e0004c8a45d48e93830f5d1136f78679546a12d"
  const page = "1"
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD&api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const coinRanking = data.Data;

  return {
    props: {
      coinRanking
    },
  };
}

export default Ranking;
