const express = require('express')
const app = express()
const fetch = require('node-fetch');
const PORT = 8000

app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
})

// curl -d "grant_type=client_credentials&client_id=NkSw9BnLM8nb4uFjbAhcUEeiDeHmka3BCWT115hNlDloLuohdf&client_secret=RZdghw0dBjwqyPSB9Y3fsAcxIoPdzix5obck6lHd" https://api.petfinder.com/v2/oauth2/token

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2MDAxYmI4ZDcyMjY2NDZhYTJhODk5ZDcwMWRiMzlmYjdiMDU1ODZlMWFiOTc0ZjNiODc4Yjk5ODNmNjcyNWM1MTc2NTg3MmQ0YzBiZjVmIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImI2MDAxYmI4ZDcyMjY2NDZhYTJhODk5ZDcwMWRiMzlmYjdiMDU1ODZlMWFiOTc0ZjNiODc4Yjk5ODNmNjcyNWM1MTc2NTg3MmQ0YzBiZjVmIiwiaWF0IjoxNTc4MTk2MTIyLCJuYmYiOjE1NzgxOTYxMjIsImV4cCI6MTU3ODE5OTcyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.hNO7S17FHYfbt6eF9JIE10X2brEwYbD8SdJtWNGHOCjcewuRO-zWkuQu1x5KkGaAqFqcsSRFRk3lXyoRHsn68ivP9DACStNaZNNFm2SRckIXJQJz0_7hozWo7g9A7nC20yC2RDYrqHG2kVj2jQXEK4TlqeUifOdQ5J_ZRPIXvOKe3hU-S7EwuH8OVFn3WWbdKfJF-IFPuCQwFBSou7h2TGuZG8XUAQ3qqkdJlnHnLiO4PDaqhhL1AahQBxn_yQHkxmM-bnqJq2QtqvXVtc1HCKrjynplaW2vUqVrGoVhzikUVOtD3qH6-462belVdzUvvDBe8NlPJlnDwAD8ntVTdg";

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

app.get('/animal/:id', (req, res) => {
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