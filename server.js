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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFjNzE5MzcwNjIyZjc4YTE4NzRkMzJhNWI2ZDRlNmMwMjg0ZTZiZjZkN2VmZjA3NjZhMWNhM2FjNmMzOWNiNTQxZDg4MGNhNGE4MjYyMzA4In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjFjNzE5MzcwNjIyZjc4YTE4NzRkMzJhNWI2ZDRlNmMwMjg0ZTZiZjZkN2VmZjA3NjZhMWNhM2FjNmMzOWNiNTQxZDg4MGNhNGE4MjYyMzA4IiwiaWF0IjoxNTc4MTAwNTIzLCJuYmYiOjE1NzgxMDA1MjMsImV4cCI6MTU3ODEwNDEyMywic3ViIjoiIiwic2NvcGVzIjpbXX0.EzAFyP1_8OkdgroGWpWH9WfAVNmGIPqACkzrpu7mpFa_WIGcZdX86sdymfG-Hy-0KeRmq_9LftprYW-2jUh00C8ol3mwd_3qY5hItAdL6jFQH4mHBjBvKr3-jf6gy6qYHGNtvxiShpYt1K28oc962bG7vfygFlNIK1JbgJUhdu0jMH1faXyV1jJvMl8Yi9r9lGoBXbUne_w1iHoVKKLKZKTCzcoJHvYx6qzSC4VDlPkw0P4kn01hpSiwXAEmpaqSylFYh3HNTrMJ9CNd7Yqx3WsCILANF2Nkh41Ap8y1SPdPEJfqmYdt1CkMSjWyISeIDPo2F16kETbfWz2PRF3-1Q";

app.get('/', function (req, res) {
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

app.get('/animal/:id', (req,res) => {
  fetch(`https://api.petfinder.com/v2/animals/${req.params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(json => res.send(json))
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT} port`)
})