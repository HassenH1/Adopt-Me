import React, { useEffect, useState } from "react";
import Card from "../Card";
import Slider from "react-slick";

const wrapperStyles = {
  position: "relative",
  width: "250px",
  height: "250px",
  left: "32rem",
  top: "10rem"
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Image = {
  height: "20rem",
  width: "100%",
}

export default function Showpage(props) {
  const [elem, setElem] = useState("")

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

  const images = elem.animal && elem.animal.photos.map((e, i) => {
    return (
      <div key={i}>
        <img src={e.full} style={Image} alt="animal"/>
      </div>
    )
  })

  return (
    <div style={{ padding: "0", margin: "0", height: "100vh", width: "100vw" }}>
      <div style={wrapperStyles}>
        <Card>
          <h3>{elem.animal && elem.animal.name}</h3>
        </Card>
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
    </div>
  )
}