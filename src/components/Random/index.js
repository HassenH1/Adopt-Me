import React, { useState } from 'react';
// import { render } from 'react-dom';

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
  // state = {
  //   cards: ['First', 'Second', 'Third'],
  // };
  const [animals, setAnimals] = useState(["Hassen", "work", "please", "Im", "tired", "of", "Life"])

  const remove = () =>
    setAnimals(( animals ) => (
      animals.slice(1, animals.length)
    ));

    return (
      <div style={appStyles}>
        <div style={wrapperStyles}>
          {animals.length > 0 && (
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
                <Card>{animals[0]}</Card>
              </Swipeable>
              {animals.length > 1 && (
                <Card zIndex={-1}>{animals[1]}</Card>
              )}
            </div>
          )}
          {animals.length <= 1 && (
            <Card zIndex={-2}>No more cards</Card>
          )}
        </div>
      </div>
    );
}

export default Random;
