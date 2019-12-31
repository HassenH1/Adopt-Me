import React from "react";

const buttonStyles = {
  // padding: "16px 24px",
  padding: "36px 24px",
  background: "whitesmoke",
  cursor: "pointer",
  border: "none",
  borderRadius: "50%",
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;
