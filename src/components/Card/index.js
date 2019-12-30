import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 10,
  width: "550px",
  height: "500px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 40,
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;
