import React from 'react';

const cardStyles = {
  background: 'whitesmoke',
  width: '750px',
  height: '710px',
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
