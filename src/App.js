import React, { useEffect } from 'react';
import './App.css';

function App() {
  // // const [state, setstate] = useState(initialState)
  // useEffect(() => {
  //  const random = fetch("/", {
  //    method: "GET",
  //     headers: {
  //         "Content-Type": "application/json"
  //       }
  //  })
  //   return () => {
  //     //cleanup
  //   };
  // }, [])
  useEffect(async () => {
    const random = await fetch("http://localhost:8000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await random.json()
    console.log(json)
  }, [])

  return (
    <div className="App">
      Lets see if a fetch call works in the front-end
    </div>
  );
}

export default App;
