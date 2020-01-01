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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIwOWIwYjU2MWYxMTY3YTBlNjM1N2YxZDZiYTg2YTIzZjQ1NDUzM2U0ZDJhODFlZWRmNDlkZGRlYTU2MTQ3YzNiNGNhN2I4NmUzYTMyOTZiIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImIwOWIwYjU2MWYxMTY3YTBlNjM1N2YxZDZiYTg2YTIzZjQ1NDUzM2U0ZDJhODFlZWRmNDlkZGRlYTU2MTQ3YzNiNGNhN2I4NmUzYTMyOTZiIiwiaWF0IjoxNTc3OTA4MDk3LCJuYmYiOjE1Nzc5MDgwOTcsImV4cCI6MTU3NzkxMTY5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.UqEg0sQED3m2qG1HCfISszRwkZSLHS_CnbOVqCdeDU1jVgee9jwJ9jGbHNjmCkMBSiU6l_15XqKXQaO_CKELJbWq8DCGRMgD1Ljzl3Xc67Mh1ZzsdRNIrMhQD9ArQFsSxwwbM5Irq2nvsPvjE76hFxdAqdc5RoNZ4DgsEiJhIg-dwdBGtnuIxSZG0yebEDS7UJbSxaIxKZup_fFY3MTsLvPHyLQiqZYqEDEIceFMvNro0tZIlqRYf7-EgR875os6aSdJbMw_25jC6QdFxRC88vmFheWTR_YWAdqyGXIsIOTm2hNzjlbBlY7-J2e0BQ__K0M1yM5KEis1WjXAEzJAvw";

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