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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk5ZGMzZjE5MDQ3NzE1NDc4YWUwMzBlMjcwODkzYmUyNDQwYTc0MTc4NTU0MGQ2NzZjYzU0OTcxOGY0MDEzYjRjZDlhZGI4NzZjNWIyOWY1In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6Ijk5ZGMzZjE5MDQ3NzE1NDc4YWUwMzBlMjcwODkzYmUyNDQwYTc0MTc4NTU0MGQ2NzZjYzU0OTcxOGY0MDEzYjRjZDlhZGI4NzZjNWIyOWY1IiwiaWF0IjoxNTc3NTkwMzI4LCJuYmYiOjE1Nzc1OTAzMjgsImV4cCI6MTU3NzU5MzkyOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.fuWQU0MhgKdmbWTltFF1xezG5nWGwSHu_uz7eya5wwvYV25KUK0OcY1VZZF0tXGQgu3h25_CYLbPplHcixbKYMyJewpw-x8iwWCXPQWt3elP-8F1BtgnMkDbyW1QjLTv68P9RHWV4ZZNlo01SsVtuWaY0fO1NOdlcRxS3NZhNiyS2-WXuguhDWNlv1itji1fRqjEsGWve5pXfVa9JVif8eEaPwcTVKCcas1OilDt7qI9XMXULKgXm5lhphm2QI4LlH6Z44hGYqD1rEqFclg_9Bn1-zfjpLy5ujKD6P8PD4U_zPfrcgReogTCT7h3yL_O1d-viHj7t1ketgu5xf551A";

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

// app.get('/', (req,res) => {
//   res.json("hitting in the front end inshallah")
// })
 
app.listen(PORT, () => {
  console.log(`server running on ${PORT} port`)
})