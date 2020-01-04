import React from "react";

const buttonStyles = {
  // padding: "16px 24px",
  padding: "15px 24px",
  background: "white",
  cursor: "pointer",
  border: "none",
  borderRadius: "20%",
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;
