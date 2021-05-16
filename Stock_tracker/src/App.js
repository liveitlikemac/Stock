import React,{useState,useEffect} from 'react';
import { Button } from '@material-ui/core';
import {FormControl ,InputLabel }from '@material-ui/core';
import Stock from './stock'
import './App.css';
import { db } from './firebase';
import firebase from 'firebase';


function App() {

const [stocks,setStocks]=useState([]);
const [inputx,setInputx]= useState('');
//when the app loads we need to listen to DB and fetch stocks
useEffect(() => {
  //this code fires when app.js loads
  
db.collection('stocks').orderBy('timestamp','desc').onSnapshot(snapshot =>
  {
  setStocks(snapshot.docs.map(doc =>({id:doc.id,stock:doc.data().stock})))
  })
}
,[]);





const AddStocks =(event)  => {
  
  db.collection('stocks').add(
    {
      stock:inputx,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }
  )
  setStocks([...stocks,inputx]);
  setInputx('');
}
  return (  


    <div className="App">
    
    <form>
      <h1>Stock Tracker</h1>
{/* <input value={inputx} onChange={event => setInputx(event.target.value)}/> */}
<FormControl>
  <InputLabel >Add stock</InputLabel>
  <input value={inputx} onChange={event => setInputx(event.target.value)}/>
  
</FormControl>
<Button variant="contained" onClick={AddStocks} color="primary" disabled={!inputx}>
Enter script name
</Button>
</form>
<ul>
  {stocks.map(x => (
  <Stock stock={x}/>
  ))}


</ul>
     </div>
  );
}

export default App;
