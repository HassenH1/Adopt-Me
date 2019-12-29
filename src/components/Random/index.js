import React from 'react'

export default function Random(props) {
  // const test = props.animals && props.animals[0]
  //   ? props.animals[0].photos.map((elem, i) => {
  //     return (
  //       <ul key={i}>
  //         <li>
  //           <img src={elem.small} />
  //         </li>
  //       </ul>
  //     )
  //   })
  //   : ""

  const randomAnimals = props.animals.map((elem, i) => {
    return (
      <div key={i}>
        <div>
          {elem.photos.map((el, i) => {
            return (
              <img key={i} src={el.small} />
            )
          })}
        </div>
      </div>
    )
  })
  return (
    <div>
      {/* <h1>Testing Photos</h1> */}
      {/* <div>{test}</div> */}
      <hr />
      <hr />
      <hr />
      {randomAnimals}
    </div>
  )
}
