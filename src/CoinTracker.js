import {useState, useEffect } from "react";


function App() {
  const [loading,setLoading] =useState(true);
  const [coins,setCoins] = useState([])
  const [myMoney,setMyMoney] = useState(0)
  const [sltCoin,setSltCoin] = useState(0)
  const[coinName,setCoinName] = useState("")
  const onChange=(event)=>{
    setMyMoney(event.target.value)
  }
  const onChangeOp=(event)=>{
    setSltCoin(event.target.value);
    setCoinName(event.target.options[event.target.selectedIndex].label)
  }
  useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers")
  .then((response) => response.json())
  .then((json) => {setCoins(json)
     setLoading(!loading)}
    )}
  ,[]);

  
  return (
    
      <div>
       <h1>The Coins! {loading ? null :`(${coins.length})`}</h1>
       {loading ? <strong>Loading...</strong> :<ul>
        <select onChange={onChangeOp}>
          <option>Select Coin</option>
          {coins.map((coin) =>    
        <option key ={coin.id} label ={coin.name} value ={coin.quotes.USD.price}>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} 
        </option>)}
        </select>
        
        <input id="money" type = "number" placeholder = "$money$" onChange={onChange}  />
       
       </ul> }
       <hr />
           <h3> {myMoney===0 ? null :  `You Can Get ${myMoney/sltCoin} ${coinName}`}</h3>
       
     </div>
   
  );
}

export default App;

