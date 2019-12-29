import React, { useState, useEffect } from 'react';
import Random from './components/Random'
import './App.css';

function App() {
  const [data, setData] = useState([])
  async function fetchAPI() {
    const random = await fetch("http://localhost:8000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await random.json()
    // console.log(json.animals)
    setData(json.animals)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="App">
      Lets see if a fetch call works in the front-end
      <Random animals={data}/>
    </div>
  );
}

export default App;
