import React, { useState } from 'react'
import Swipeable from "react-swipy"
import Button from "../Button"
import Card from "../Card"
import '../../App.css'

const flexing = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
  position: "relative",
  top: "35rem",
}

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

  // const randomAnimals = props.animals.map((elem, i) => {
  //   return (
  //     <div key={i}>
  //       <div>
  //         {elem.photos.map((el, i) => {
  //           return (
  //             <img key={i} src={el.small} />
  //           )
  //         })}
  //       </div>
  //     </div>
  //   )
  // })
  const [cards, setCards] = useState(["hassen", "this", "world", "is", "Horrible"])
  console.log(cards.length, "<------------------length")
  const remove = () => {
    setCards(({ cards }) => ({ cards: cards.slice(1, cards.length) }));
  }
  return (
    <div className="wrapper">
      {/* {randomAnimals} */}
      {cards.length > 0 && (
        <div>
          <Swipeable
            buttons={({ right, left }) => (
              <div style={flexing}>
                <Button onClick={left}>Reject</Button>
                <Button onClick={right}>Accept</Button>
              </div>
            )}
            onAfterSwipe={remove}
          >
            <Card>{cards[0]}</Card>
          </Swipeable>
          {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
        </div>
      )}
      {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
    </div>
  )
}
