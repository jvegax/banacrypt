import Coin from "./Coin";
import RankingHeader from "./RankingHeader";

const RankingList = ({ coinRanking }) => {
  console.log(coinRanking)

  return (
    <div>
      
      <RankingHeader />

      <div>
        {coinRanking.map((coin) => (
          <Coin 
            key={coin.CoinInfo.Id}
            info={coin.CoinInfo}
            position={coinRanking.indexOf(coin)}
            fullData={coin.DISPLAY.USD}
          />
        ))}
      </div>
    </div>
  );
};

export default RankingList;
