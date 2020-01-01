import Random from './components/Random';
import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

function App() {
  const [data, setData] = useState({})

  const fetchingData = async () => {
    const data = await fetch("http://localhost:8000/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const dataJson = await data.json()
    setData({ ...dataJson })
  }

  useEffect(() => {
    fetchingData()
  }, [])

  const remove = () => {
    setData((data) => (
      { animals: [...data.animals.slice(1, data.animals.length)] }
    ));
  }
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Random data={data} remove={remove}/>}></Route>
        <Route exact path='/animal/:id' ></Route> {/*Missing a component here */}
      </Switch>
      {/* <Random /> */}
    </div>
  )
}

export default withRouter(App);
