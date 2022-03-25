
const CoinList = ( { coinRanking } ) => {

  // TODO : change with tailwind select component
  return (
    <>
      (
        <option className="text-center" value=""> ... </option>
      )
      {
        coinRanking.map( coin => 
          { return coin.RAW.USD.CIRCULATINGSUPPLY > 0 && (<option className="text-center" key={ coin.CoinInfo.Id } value={ coin.CoinInfo.Name }>{ coin.CoinInfo.FullName } ${ coin.CoinInfo.Name }</option>) }
        )
        
      }
      
    </>
  );
};

export default CoinList;
