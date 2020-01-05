import React from 'react'
import Showpage from '../Showpage'
import { withRouter, Route } from 'react-router'

const navbar = {
  display: "flex",
  width: "100%",
  height: "20%",
  background: "#eee",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "100",
}

const logo = {
  width: "200px",
  height: "100%",
  background: "#e0ebd4",
  textAlign: "center",
  padding: "10px",
  fontFamily: "Lobster",
  fontSize: "35px",
  color: "rgb(255, 88, 100)"
}

const A = {
  textDecoration: "none",
  color: "rgba(0, 0, 0, 0.8)",
  margin: "0 40px",
  cursor: "pointer",
  position: "absolute",
  left: "0px"
}

function Navbar(props) {
  return (
    <div style={navbar}>
      {
        <Route exact path="/animal/:id" />
          ? <a style={A} onClick={() => props.history.go(-2)}><i className="fas fa-arrow-left"></i></a>
          : ""
      }
      <div style={logo}>Pick Me</div>
    </div>
  )
}
export default withRouter(Navbar)