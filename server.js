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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU1ODE3ZWJkZTZkM2QyZDE5NWU0ZWI1NjQ4NzAxMGVmM2I0MzNhMWUxN2YwYzkxZDczZTVlMTE1YTU1OWJhZGFmNGI5MDkyMTU0Y2U1NzMzIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImU1ODE3ZWJkZTZkM2QyZDE5NWU0ZWI1NjQ4NzAxMGVmM2I0MzNhMWUxN2YwYzkxZDczZTVlMTE1YTU1OWJhZGFmNGI5MDkyMTU0Y2U1NzMzIiwiaWF0IjoxNTc4MjAwMzcxLCJuYmYiOjE1NzgyMDAzNzEsImV4cCI6MTU3ODIwMzk3MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.dkzaP1i9xe5rxYJVVXDbibJVH3axY4WYjLQ-QG8WVWDbUjI-LPF0lSTgLtMrcTZejcxeZW0MS6QTEkK11VsPVEATCh-DZdNspTsJawDA1bIOgHAMx3DJD45rSxDnDzmGA7823YBqo-Kb223XVWD_cSoqLyQmhon5zRDthsqDXL-Ce6wxW8DOD0tqZJ2TcFhOH_9-mJXM4WVy_CpwogdLbYOpUP9AlK4z5H_tLV2yqpMNEouDr7VYdg91DSFitjTaQMFWKIkteEu8fv0x6SsaSytwdzXksHMxA0tx-wLb9y_96LGTVfKK2T8cWyO5sTE55VhOXl29BGtAr-CShhaDeQ";

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