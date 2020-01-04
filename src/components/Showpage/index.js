import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const wrapperStyles = {
  position: "relative",
  width: "250px",
  height: "321px",
  top: "10rem",
  margin: "0 auto",
  textAlign: "center"
};

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
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
      <div key={i} style={{ width: "100vw", height: "100vh" }}>
        <img src={e.full} style={Image} alt="animal" />
      </div>
    )
  })

  return (
    <div style={{ padding: "0", margin: "0", height: "100vh", width: "100vw" }}>
      <div style={wrapperStyles}>
        <Slider {...settings}>
          {images}
        </Slider>
        <h3>{elem.animal && elem.animal.name}</h3>
      </div>
    </div>
  )
}