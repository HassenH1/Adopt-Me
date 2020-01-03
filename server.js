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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZlNmM0Mzc1YmMzOTcxZWZhNGFmYjdmNTQ0OTEzNjZjNmRjNDllZmY0MWQ2OWU4MDkyNTIwMjg0OTA3N2UyZDY5ODQ2ZWFjNjkxMmZkNDgzIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImZlNmM0Mzc1YmMzOTcxZWZhNGFmYjdmNTQ0OTEzNjZjNmRjNDllZmY0MWQ2OWU4MDkyNTIwMjg0OTA3N2UyZDY5ODQ2ZWFjNjkxMmZkNDgzIiwiaWF0IjoxNTc4MDE4MzMzLCJuYmYiOjE1NzgwMTgzMzMsImV4cCI6MTU3ODAyMTkzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.MKSXHkljLM4vGbPJ6WZa5R75gHFND_YV4Q-CI8MEQtrgtpNnF396ZKzpl0FrO0vmZnOBPJYAxMJl7R6TMDfynKKqPuuP85HLYVTQi6BdfW3_4xhSzUqqLphKdSGUk6mvU_lGPFvqoDDB_jCqm--vBeCWl5XJ7CVKMykQyLrGETkJL5yHcuYi1hOoi8yTb5Yol8yj6ep4SET4-UxcZSCXxSHrW5zTc8iEFZlWJhikwmaYmclUHd8qPwY6guOxOeAwCI2qtXdg_pM1rKJcDWHP50Od0pdw8ATmJTFDPCi48Yra1camommtO8F-Eot8_l9X4NoP52s3CBvQLA4g41nfzQ";

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