import React, { useState, useEffect } from 'react';
import Swipeable from 'react-swipy';
import Card from '../Card';
import Button from '../Button';

const appStyles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  fontFamily: 'sans-serif',
  overflow: 'hidden',
};

const wrapperStyles = {
  position: 'relative',
  width: '750px',
  height: '750px',
};
const actionsStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 12,
};

const Random = () => {
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
      {animals: [...data.animals.slice(1, data.animals.length)]}
    ));
    // console.log("does it get here?")
    // let newData = data.animals.slice(1, data.animals.length)
    // console.log("or here?")
    // setData({...newData})
    // console.log(data, "<---whats this new stff here?")
  }
  return (
    <div style={appStyles}>
      <div style={wrapperStyles}>
        {console.log(data, "<----wahts in here")}
        {data.animals && data.animals.length > 0 && (
          <div style={wrapperStyles}>
            <Swipeable
              buttons={({ right, left }) => (
                <div style={actionsStyles}>
                  <Button onClick={left}>Reject</Button>
                  <Button onClick={right}>Accept</Button>
                </div>
              )}
              onAfterSwipe={remove}
            >
              <Card>{data.animals[0].type}</Card>
            </Swipeable>
            {data.animals && data.animals.length > 1 && (
              <Card zIndex={-1}>{data.animals[1].type}</Card>
            )}
          </div>
        )}
        {data.animals && data.animals.length <= 1 && (
          <Card zIndex={-2}>No more cards</Card>
        )}
      </div>
    </div>
  );
}

export default Random;