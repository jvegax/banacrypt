import Coin from "./Coin";
import RankingHeader from "./RankingHeader";

const RankingList = ({ coinRanking }) => {
  console.log(coinRanking);

  return (
    <div>
      <RankingHeader />
      <div>
        {coinRanking.map((coin) => (
          <Coin
            key={coin.id}
            coin={coin}
            position={coinRanking.indexOf(coin)}
          />
        ))}
      </div>
    </div>
  );
};

export default RankingList;
