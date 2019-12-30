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
  const [data, setData] = useState('')

  const fetchingData = async () => {
      const data = await fetch("http://localhost:8000/", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const dataJson = await data.json()
      console.log(dataJson, "dude wtf")
      setData({dataJson})
  }

  useEffect(() => {
    fetchingData()
  }, [])

  const remove = () =>
    setData((data) => (
      data.slice(1, data.length)
    ));

  return (
    <div style={appStyles}>
      {console.log(data.dataJson && data.dataJson.animals.length, "<--------")}
      <div style={wrapperStyles}>
        {data.dataJson && data.dataJson.animals.length > 0 && (
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
              <Card>{data.dataJson.animals[0]}</Card>
              {console.log(data.dataJson.animals[0], "<----is there something here?")}
            </Swipeable>
            {data.dataJson && data.dataJson.animals.length > 1 && (
              <Card zIndex={-1}>{data.dataJson.animals[1]}</Card>,
              console.log("does it even get here bro?")
            )}
          </div>
        )}
        {console.log("what about here?")}
        {data.dataJson && data.dataJson.animals.length <= 1 && (
          console.log("and here?"),
          <Card zIndex={-2}>No more cards</Card>
        )}
      </div>
    </div>
  );
}

export default Random;
