import "animate.css";

const Coin = ({ coin, position }) => {
  const {
    fullName,
    name,
    price,
    circulatingSupply,
    marketCap,
    change24h,
    imageUrl,
  } = coin;

  const priceColor = change24h >= 0 ? "text-green-700" : "text-red-700";
  const symbol = change24h === 0 ? "" : change24h > 0 ? "▲" : "▼";

  return (
    <div className="font-bold text-gray-700 border border-1 border-purple-100 flex p-6 hover:bg-purple-50">
      <p className="text-center grow w-1">{position + 1}</p>
      <p className="grow w-16 flex">
        <img
          width={26}
          src={`https://cryptocompare.com/${imageUrl}`}
          className="mr-2"
        />
        {fullName}
        <a
          target="_blank"
          href="https://accounts.binance.com/en/register?ref=70967063"
          className="animate__animated animate__heartBeat animate__infinite ml-4  text-blue-600"
        >
          <img width={28} src="/buy.png" />
        </a>
      </p>
      <p className={`grow w-5 ${priceColor}`}>${price}</p>
      <p className={`grow w-5 ${priceColor}`}>
        {symbol}
        {change24h}%
      </p>
      <p className="grow w-5">{marketCap}</p>
      <p className="grow w-5">
        {circulatingSupply} {name}
      </p>
    </div>
  );
};

export default Coin;
