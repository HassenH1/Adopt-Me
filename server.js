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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQxNDZhN2I4NTIzYTVkMTMwODQwNDU1ZjRjMGY3M2FkNGU3MWU3MDMwNTFiZTBmMjczYTc1OTMzOTk0NjU3OWEyZTBlYzI0NmVmN2ViYzVjIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjQxNDZhN2I4NTIzYTVkMTMwODQwNDU1ZjRjMGY3M2FkNGU3MWU3MDMwNTFiZTBmMjczYTc1OTMzOTk0NjU3OWEyZTBlYzI0NmVmN2ViYzVjIiwiaWF0IjoxNTc4MDI0NjIyLCJuYmYiOjE1NzgwMjQ2MjIsImV4cCI6MTU3ODAyODIyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.VYi35BiT546B9AsolICkker6SboNsuzXGM8suDQfLJjLAcLaF0m5x8sj5MuBYwGp2xF899UlHnbLG2lEqOxKOiqqsYorH_cuIq3SZX5fvw_VRLUSFbHAv9-1T1v-bkaZnTe0xyaWtJZt9QTO3ZtZ9DIhEs1FLprnXp3V-Xi1bofFfmswVl20BA-whCum1n9qimjbUcxQIfWEgaQinNhA2XAQ0rPmlEPsaQuESRAG_0TlBrUoEA2jA6Nq29MwirA9qTPBhM8aQWElnDjxeUwowK6MNET9oELva7w3wzY4kj5KC4hbNGxcZ_uEzTfd7J91cnXWhT8TaKNFJrkMevVKxA";

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