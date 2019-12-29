import React from 'react'

export default function Random(props) {
  console.log(props.animals)
  const randomAnimals = props.animals.map((elem, i) => {
    return(
      <ul key={i}>
        <li></li>
      </ul>
    )
  })
  return (
    <div>
      did this work?
      {randomAnimals}
    </div>
  )
}
