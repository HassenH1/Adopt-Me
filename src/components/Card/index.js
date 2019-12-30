import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: "10px",
  width: "548px",
  height: "508px",
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
