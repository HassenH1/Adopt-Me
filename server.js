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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZkNDYwNTMwODQ4NTVmNjMyODMyOGEzZTIyZmI2MDNjMzJkMjYzNTgyODVjMGNhMjBiYmNjZGE4MWI1NmFkZTMxYjlhODBjNjY5MzFmMzUwIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjZkNDYwNTMwODQ4NTVmNjMyODMyOGEzZTIyZmI2MDNjMzJkMjYzNTgyODVjMGNhMjBiYmNjZGE4MWI1NmFkZTMxYjlhODBjNjY5MzFmMzUwIiwiaWF0IjoxNTc4MDE0NzMwLCJuYmYiOjE1NzgwMTQ3MzAsImV4cCI6MTU3ODAxODMzMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.tje6aSVb1Kt5pvRuPWHWaKzRmzEBpkfbTddY5HPTdSrPbYMzVu6wGUjJb25OzooPih4p_cbXceAB05F4nOkjaPeEBaR0eUMr9uE-fP13onDAThk0Zx4p1ExpqZxa9UTlnsBfyBBDHW7_2T-PxbhEyKUa6sJTjFxbiwq9VTIK1FF6ZbITUt2ZU02hvgqvzWDcT3zTojVcNwvs5pFXQNW0JIgx6D-oi5lU9amA2PpOwXNHAZ68ydLuhzhENKnPCONEPMq_WTkE5u7OueIpKvsrtzvFOBnmH6LNzFPHBMGtIoBulGC9HhaU3Or2-kesbra-N1t5VCDiBydwj7yiOS1BeQ";

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