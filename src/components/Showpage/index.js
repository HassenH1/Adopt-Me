import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const wrapperStyles = {
  margin: "0"
};

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
};

const Image = {
  height: "35%",
  width: "35%",
  margin: "0 auto",
  position: "relative",
}

const info = {
  border: "1px solid black",
  width: "50rem",
  position: "relative",
  bottom: "10rem",
  borderRadius: "10px"
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
      <img src={e.full} alt="animal" style={Image} />
    )
  })

  return (
    <div style={{ padding: "0", margin: "0", height: "92vh", width: "100%", background: "whitesmoke", overflowX: "hidden" }}>
      <div style={{width: "28rem", position: "relative", left: "35%"}}>
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
      <div style={{ border: "1px solid black", height: "30rem", width: "20rem", position: "fixed", top: "8rem", left: "50px", textAlign: "center", padding: "30px", background: "white" }}>
        <h3>Dog Info</h3>
        <h4>Name: {elem.animal && elem.animal.name}</h4>
        <h4>Breed: {elem.animal && elem.animal.breeds.primary}</h4>
        <h4>Age: {elem.animal && elem.animal.age}</h4>
        <h4>Gender: {elem.animal && elem.animal.gender}</h4>
        <h4>Description: {elem.animal && elem.animal.description}</h4>
      </div>
      <div style={{ border: "1px solid black", height: "30rem", width: "20rem", position: "fixed", top: "8rem", right: "50px", textAlign: "center", padding: "30px", background: "white" }}>
        <h3>Adoption Contact</h3>
        <h4>Email: {elem.animal && elem.animal.contact.email}</h4>
        {
          elem.animal && elem.animal.contact.phone === null
            ? <h4>Phone: No Number Available</h4>
            : <h4>Phone: {elem.animal && elem.animal.contact.phone}</h4>
        }
        {
          elem.animal && elem.animal.contact.address.address1 ? <h4>Address: {elem.animal && elem.animal.contact.address.address1}, {elem.animal && elem.animal.contact.address.city}, {elem.animal && elem.animal.contact.address.state}, {elem.animal && elem.animal.contact.address.postcode}</h4>
            : elem.animal && elem.animal.contact.address.address2 ? <h4>Address: {elem.animal && elem.animal.contact.address1.address2}, {elem.animal && elem.animal.contact.address.city}, {elem.animal && elem.animal.contact.address.state}, {elem.animal && elem.animal.contact.address.postcode}</h4>
              : <h4>no address Available</h4>
        }
        {console.log(elem.animal && elem.animal.contact)}
      </div>
    </div>
  )
}