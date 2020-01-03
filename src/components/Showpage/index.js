import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Gallery, GalleryImage } from "react-gesture-gallery"

const wrapperStyles = { position: "relative", width: "250px", height: "250px", left: "32rem", top: "10rem" };


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
          {console.log(elem.animal && elem.animal.photos[0])}
          <Gallery index={index} onRequestChange={i => {
            setIndex(i);
          }}
          >
            {console.log(elem.animal)}
            {elem.animal && elem.animal.photos.map((e, i) => {
              return (
                <GalleryImage src={e.full} objectFit="contain" key={i} />
              )
            })}
          </Gallery>
          <h3>{elem.animal && elem.animal.name}</h3>
        </Card>
      </div>
    </div>
  )
}