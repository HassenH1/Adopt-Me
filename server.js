const express = require('express')
const app = express()
const fetch = require('node-fetch');
const PORT = 8000

app.use(express.json())
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
})

// curl -d "grant_type=client_credentials&client_id=NkSw9BnLM8nb4uFjbAhcUEeiDeHmka3BCWT115hNlDloLuohdf&client_secret=RZdghw0dBjwqyPSB9Y3fsAcxIoPdzix5obck6lHd" https://api.petfinder.com/v2/oauth2/token

app.get('/', function (req, res) {
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQzOTgzYjEzNWU5NWY5NDIxYjkyYzM1Mjg3ZTk3ZWNhYzc2MjkzODAyNjkwNzE5N2MwYWEzZWZmN2RhZTg4YWJjODFjMTI2MTg0MTU5YjM3In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImQzOTgzYjEzNWU5NWY5NDIxYjkyYzM1Mjg3ZTk3ZWNhYzc2MjkzODAyNjkwNzE5N2MwYWEzZWZmN2RhZTg4YWJjODFjMTI2MTg0MTU5YjM3IiwiaWF0IjoxNTc3NzM3MjY2LCJuYmYiOjE1Nzc3MzcyNjYsImV4cCI6MTU3Nzc0MDg2Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.XP131gce8rM-si4GW5gkbHuK2xSXmPEpkXONopJPbSWQHeZIdjGBPyMR_l1VZ4LN5OsHKuOcJYiLmF5EwhcgRyvHFx3E6LcaTgsj7J8t7BEfGN2JuAfl3WfuLE-KqaO2d85HBpPc2pgBh-DVlcupKiplrUnUjNqr1oQ3Ra5cXQpB1UCYGTvCmeX6L2jQfAFYX1FZTb4UuFRYg1zqDN5DPVaV6cNAiVFNB6qUITdvfckxqH4lzKYMu8rzqPR1Wh9D2mKOARQ6P02uXCHeEObk35NodA9dA2u-49k65IMP0mWuaOcjpS6b_sgtQGt6FB4UrJ50x188rm2eIFZGzjgb_A";

fetch('https://api.petfinder.com/v2/animals?sort=random', {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(json => res.send(json));
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT} port`)
})