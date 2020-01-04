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
  top: "5rem"
}

const info = {
  border: "1px solid black",
  width: "50rem",
  height: "20rem",
  position: "relative",
  top: "2rem",
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
      <div key={i}>
        <img src={e.full} style={Image} alt="animal" />
      </div>
    )
  })

  return (
    <div style={{ padding: "0", margin: "0", height: "100vh", width: "100vw", background: "whitesmoke", overflowX: "hidden" }}>
      <div style={{ height: "10px" }}>
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
      <div style={{ border: "1px solid black", height: "30rem", width: "20rem", position: "absolute", top: "6rem", left: "50px", textAlign: "center", padding: "30px" }}>
        <h3>Dog Info</h3>
        <h4>Name: {elem.animal && elem.animal.name}</h4>
        <h4>Breed: {elem.animal && elem.animal.breeds.primary}</h4>
        <h4>Age: {elem.animal && elem.animal.age}</h4>
        <h4>Gender: {elem.animal && elem.animal.gender}</h4>
        <h4>Description: {elem.animal && elem.animal.description}</h4>
      </div>
      <div style={{ border: "1px solid black", height: "30rem", width: "20rem", position: "absolute", top: "6rem", right: "70px", textAlign: "center", padding: "30px" }}>
        <h3>Adoption Contact</h3>
        <h4>Email: {elem.animal && elem.animal.contact.email}</h4>
        <h4>Phone: {elem.animal && elem.animal.contact.phone}</h4>
        <h4>Address: {elem.animal && elem.animal.contact.address}</h4>
      </div>
      {console.log(elem.animal)}
    </div>
  )
}



// id: 39717557
// organization_id: "TX2228"
// url: "https://www.petfinder.com/dog/ginger-adopted-39717557/nh/claremont/lifesavers-corp-tx2228/?referrer_id=c93b6d4c-91f8-4b73-8a19-c73c800d6ecd"
// type: "Dog"
// species: "Dog"
// breeds: {primary: "Shepherd", secondary: null, mixed: true, unknown: false}
// colors: {primary: "Red / Chestnut / Orange", secondary: null, tertiary: null}
// age: "Baby"
// gender: "Female"
// size: "Medium"
// coat: null
// attributes: {spayed_neutered: true, house_trained: false, declawed: null, special_needs: false, shots_current: true}
// environment: {children: true, dogs: true, cats: true}
// tags: []
// name: "Ginger - Adopted!"
// description: "Ginger is a 5 month old female Shepherd/Hound mix (best guess) pup that currently weighs about 25lbs. She was found..."
// photos: (3) [{…}, {…}, {…}]
// status: "adopted"
// status_changed_at: "2017-11-16T15:24:59+0000"
// published_at: "2017-10-22T17:42:42+0000"
// distance: null
// contact: {email: "lifesaversapps@outlook.com", phone: "(903) 452-0526", address: {…}}
// _links: {self: {…}, type: {…}, organization: {…}}