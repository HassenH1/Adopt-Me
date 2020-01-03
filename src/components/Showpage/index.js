import React, { useEffect, useState } from "react";
import Card from "../Card";


const wrapperStyles = { position: "relative", width: "250px", height: "250px", left: "32rem", top: "10rem" };

const main = {
  backgroundColor: "#000",
  overflow: "hidden",
  position: "relative",
}
const swiper = {
  display: "flex",
  overflowx: "visible",
  transitionProperty: "transform",
  willChange: "transform",
}
const image = {
  objectFit: "contain"
}

export default function Showpage(props) {
  const [elem, setElem] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = props.match.params.id
    const fetching = async () => {
      await (await fetch(`http://localhost:8000/animal/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })).json()
        .then(data => setElem(data))
    }
    fetching()
  }, [])

  return (
    <div style={{ padding: "0", margin: "0", height: "100vh", width: "100vw" }}>
      <div style={wrapperStyles}>
        <Card>
          <div
            style={main}
            style={{
              width: '700px',
              height: '400px',
            }}
          >
            <div style={swiper}>
              {elem.animal && elem.animal.photos.map((src, i) => {
                return <img key={i} src={src.full} width="50%" height="50%" style={image}/>;
              })}
            </div>
          </div>
          <h3>{elem.animal && elem.animal.name}</h3>
        </Card>
      </div>
    </div>
  )
}
