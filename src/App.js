import Random from './components/Random';
import Showpage from './components/Showpage';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

function App() {
  const [data, setData] = useState({})
  const [leftArray, setLeftArray] = useState([])
  const [rightArray, setRightArray] = useState([])

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

  const historyList = (direction, pet) => {
    console.log(direction, pet, "<------------------right from App")
    direction === "left"
      ? setLeftArray([...leftArray, pet])
      : setRightArray([...rightArray, pet])
  }

  return (
    <div>
      {console.log(leftArray, "<--------------------------left")}
      <Navbar data={data} />
      <Switch>
        <Route exact path='/' component={() => <Random data={data} remove={remove} historyList={historyList} />}></Route>
        <Route exact path='/animal/:id' component={(props) => <Showpage {...props} />}></Route>
      </Switch>
    </div>
  )
}

export default withRouter(App);