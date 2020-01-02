import React, { useEffect, useState } from "react";
import Card from "../Card";
// import React, { useEffect, useState } from 'react'

const wrapperStyles = { position: "relative", width: "250px", height: "250px", left: "32rem", top: "10rem"};
// const actionsStyles = {
//   display: "flex",
//   justifyContent: "space-between",
//   marginTop: 12,
// };


export default function Showpage(props) {
  const [elem, setElem] = useState("")

  useEffect(() => {
    const fetching = async () => {
      await (await fetch(`http://localhost:8000/animal/${props.match.params.id}`, {
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
    <div style={{padding: "0", margin: "0", height: "100vh", width: "100vw"}}>
      <div style={wrapperStyles}>
        <Card style={{overflow:"auto"}}>
          {console.log(elem.animal && elem.animal.photos, "<-----------------------")}
          {elem.animal && elem.animal.photos.map((e, i) => {
            console.log(e)
            return(<img src={e.full} key={i}/>)
          })}
          <h3>{elem.animal && elem.animal.name}</h3>
        </Card>
      </div>
    </div>
  )
}
