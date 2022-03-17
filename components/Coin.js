import 'animate.css'

const Coin = ({ info, fullData, position}) => {
  const { FullName, Name } = info;
  const { PRICE, CHANGEPCT24HOUR, MKTCAP, CIRCULATINGSUPPLY, IMAGEURL } = fullData;

  const priceColor = CHANGEPCT24HOUR >= 0 ? 'text-green-700' : 'text-red-700'
  
  return (
    <div className="font-bold text-gray-700 border border-1 border-purple-100 flex p-6 hover:bg-purple-50">
      <p className="text-center grow w-1">{position+1}</p>
      <p className="grow w-16 flex">
          <img width={26} src={`https://cryptocompare.com/${IMAGEURL}`} className="mr-2"/>
          {FullName} <span className="text-gray-400 ml-2"> {Name}</span><a target="_blank" href='https://accounts.binance.com/en/register?ref=70967063' className="animate__animated animate__heartBeat animate__infinite ml-4  text-blue-600">Buy</a></p>
      <p className={`grow w-5 ${priceColor}`}>{PRICE}</p>
      <p className={`grow w-5 ${priceColor}`}>{CHANGEPCT24HOUR}%</p>
      <p className="grow w-5">{MKTCAP}</p>
      <p className="grow w-5">{CIRCULATINGSUPPLY}</p>
    </div>
  );
};

export default Coin;
