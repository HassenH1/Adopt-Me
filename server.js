const express = require('express')
const app = express()
// const fetch = require('node-fetch');
const PORT = 8000

app.use(express.json())
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
})

// app.get('/', function (req, res) {
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExMjgyNzk0MTRhYTg5ZmU1YzBmODMwNjFiNTQ2Njk1MTE2N2E1Y2Q0NzFlOGRkNTE4MjE3MmI1NWIwYmMyYTMwNTRhNGExNGM1NmRiMGFkIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjExMjgyNzk0MTRhYTg5ZmU1YzBmODMwNjFiNTQ2Njk1MTE2N2E1Y2Q0NzFlOGRkNTE4MjE3MmI1NWIwYmMyYTMwNTRhNGExNGM1NmRiMGFkIiwiaWF0IjoxNTc3NDk4MTk0LCJuYmYiOjE1Nzc0OTgxOTQsImV4cCI6MTU3NzUwMTc5NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.HiXwmfaigmNE9WEMdNUrAag4W0LEQIAR9hWVyoWMYOW45pg1p9Moec9ejYC28qn7c0VexAWj7iqWGO3PLsANpsT8LNHh8r3nBLQISJ2ECclr4YsDZuKs-QzsAHARBKcLHzvmSNPUqR-Kc2vIgLQmKMmIPxrGT2sCX7nj3BQT1LjGtmUIJtKesY-Aum62gO-W-LN9jtAptjQ7VG0QlCrsWWz1egeqgCeEnpyEqBKNtGSp88qytbhj0bAbkOOSk4PJvdofvUv3BAs4-UorihfFO12WCxm7ec0Z93bjWd3aUh9cyoYECY8IUntsx8O8ldyxB1fm-jAMFH3KopMJPUKMTw";

// fetch('https://api.petfinder.com/v2/animals?sort=random', {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// })
//   .then(res => res.json())
//   .then(json => res.send(json));
// })

app.get('/', (req,res) => {
  res.json("hitting in the front end inshallah")
})
 
app.listen(PORT, () => {
  console.log(`server running on ${PORT} port`)
})