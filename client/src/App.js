import {useState,useEffect} from 'react';
import './App.css';

function App() {

  const URL = 'http://localhost:3000/api';


  //fetch all data
  const takeData = async()=>{
      const response = await fetch(URL)
      const datainfo = await response.json();
      console.log(datainfo.payload)

  }
//post new data
  const postDAta = async()=>{
    const response = await fetch(URL,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:'ggg',username:'nastofel'})
    })
    const data = await response.json();
    console.log(data)
    return data
  }

  

  useEffect(()=>{
    takeData();
  },[])

  const handleOption = (e) =>{
    console.log(e.target.value)
  }

  const submitOption = (e)=>{
    e.preventDefault()
    postDAta()
    
  }




  return (
    <div className="App">
      <h1>hello</h1>

      <form method='post' onSubmit={submitOption}>
          <input type={'text'} onChange={handleOption}/>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
