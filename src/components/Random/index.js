import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

import Swipeable from 'react-swipy';
import Card from '../Card';
import Button from '../Button';

const appStyles = {
  height: '40%',
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
  width: '800px',
  height: '720px',
};
const actionsStyles = {
  display: 'flex',
  justifyContent: 'center',
  position: "relative",
  right: "2rem"
};

const image = {
  height: "500px",
  width: "438px",
  position: "relative",
  top: "48px",
  borderRadius: "10px"
}

const nameAndAge = {
  display: "flex",
  position: "relative",
  bottom: "3.5rem",
  fontFamily: "Lobster",
  letterSpacing: "3px",
  fontSize: "25px",
  color: "white"
}

const move = {
  marginRight: "1rem",
  color: "black"
}

const Random = (props) => {

  const testing = (id) => {
    props.history.push(`/animal/${id}`)
  }

  return (
    <div style={appStyles}>
      <div style={wrapperStyles}>
        {props.data.animals && props.data.animals.length > 0 && (
          <div style={wrapperStyles}>
            <Swipeable
              buttons={({ right, left }) => (
                <div style={actionsStyles}>
                  <div style={move}>
                    <Button onClick={left}><i className="fas fa-times" style={{"fontSize": "30px"}}></i></Button>
                  </div>
                  <Button onClick={right}><i className="far fa-grin-hearts" style={{"fontSize": "30px"}}></i></Button>
                </div>
              )}
              onAfterSwipe={props.remove}
            >
              <Card>
                {
                  props.data.animals && props.data.animals[0].photos.length === 0
                    ? <div style={move}>
                      No Image available
                      </div>
                    : <NavLink exact to={`/animal/${props.data.animals[0].id}`}><img src={props.data.animals[0].photos[0].full} style={image} alt="animals" onClick={() => testing(props.data.animals[0].id)}/></NavLink>
                }
                <div style={nameAndAge}>
                  <h3>{props.data.animals[0].name}, {props.data.animals[0].age}</h3>
                </div>
              </Card>
            </Swipeable>
            {props.data.animals && props.data.animals.length > 1 && (
              <Card zIndex={-1}>{props.data.animals[1].type}</Card>
            )}
          </div>
        )}
        {props.data.animals && props.data.animals.length <= 1 && (
          <Card zIndex={-2}>No more cards</Card>
        )}
      </div>
    </div>
  );
}

export default withRouter(Random);