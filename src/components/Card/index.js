import React from 'react';

const cardStyles = {
  background: 'whitesmoke',
  borderRadius: 3,
  width: '550px',
  height: '550px',
  cursor: 'pointer',
  userSelect: 'none',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: 0,
  flexDirection: "column",
  borderRadius: "15px"
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;
