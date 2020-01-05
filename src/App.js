import Random from './components/Random';
import Showpage from './components/Showpage';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

function App() {
  const [data, setData] = useState({})
  const [leftArray, setLeftArray] = useState("")
  const [rightArray, setRightArray] = useState("")

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

  const historyList = (pet, direction) => {
    console.log(pet, "<------------is this an array?")
    const left = []
    const right = []
    // direction === "left"
    //   ? setLeftArray([...leftArray, pet])
    //   : setRightArray([...rightArray, pet])
    // console.log(leftArray, "<--------------------------left")
    // console.log(rightArray, "<-------------------------right")
    // direction === "left"
    //   ? let leftArr = update(left, {$push: pet})
    //   : let rightArr = update(right, {$push: pet})
    
    if(direction === "left"){
      const leftArr = update(left, {$push: pet})
      console.log(leftArr)
    } else {
      const rightArr = update(right, {$push: pet})
      console.log(rightArr)
    }
  }

  const remove = () => {
    setData((data) => (
      { animals: [...data.animals.slice(1, data.animals.length)] }
    ));
  }
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={() => <Random data={data} remove={remove} historyList={historyList} />}></Route>
        <Route exact path='/animal/:id' component={(props) => <Showpage {...props} />}></Route>
      </Switch>
    </div>
  )
}

export default withRouter(App);