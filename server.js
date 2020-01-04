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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5YjMwNDZjMDBiODg3ZWEwZjFmYTQyZTc4MzJjYjE4OTUxZmRkNWRkNTEyMzExMzkxY2EyMTdjN2I5NzhkM2Q2MjkzMzJjMmI1YWE5ODJlIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjM5YjMwNDZjMDBiODg3ZWEwZjFmYTQyZTc4MzJjYjE4OTUxZmRkNWRkNTEyMzExMzkxY2EyMTdjN2I5NzhkM2Q2MjkzMzJjMmI1YWE5ODJlIiwiaWF0IjoxNTc4MTE3NDIyLCJuYmYiOjE1NzgxMTc0MjIsImV4cCI6MTU3ODEyMTAyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.Y-hpOV1iCSvwXpW-tIF5O3CFiRTWgDeYRiDeTpLr0OPDtuPsYazcUHDkfliwo7M1SDcYEI62H7rGXw7T7xAPUK7lK6ZJSAXWO_cguDbBrJAgaJicWGo2TuTb49gW6klmuUBQfpdStbcXVJQLBuEfDqHUT22SYRn1-ckM6JHrAq34uF8r6M1Ks3N5wOkpeiSYsYgRD6rF4vpgSfw5tzg0FpgbCk6_-vTA0fh3sLEbivhxd_14B_FJqaXadclw1OjdraxtGdxxyrNAJchaQO_5bbwSI9F0h95QkgT6ipnbTpipOM3-tYJtziFWa3SAfH2ryX-zbiKHeXtq2n_nmQw3jQ";

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