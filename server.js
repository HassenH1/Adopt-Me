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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ1ODY0NTEzYWFjNTNlNDg2MzA0MzQxMDM4NmMzZjFkMmM1Nzg4ZWM3MzRjN2RjMTUxNjk3ZjEwMjMxZmM5ODZkMzQ0NmY5MzBkYmVlMmY0In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImQ1ODY0NTEzYWFjNTNlNDg2MzA0MzQxMDM4NmMzZjFkMmM1Nzg4ZWM3MzRjN2RjMTUxNjk3ZjEwMjMxZmM5ODZkMzQ0NmY5MzBkYmVlMmY0IiwiaWF0IjoxNTc4MTA0ODEwLCJuYmYiOjE1NzgxMDQ4MTAsImV4cCI6MTU3ODEwODQxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.HTTZEQAKafLeYEdOqYN7FGEdarJN1FCnKq7y9gKUtwVu5L7I2s-8-9HU3fGe6edxWyvgqZJB5MuTYyLNxiOjxaScuJhJMn8pSXD6SvI23GVRjV8zTT9PmmKtKBEKJq5F04lrZOxap7PI9pVft0SoOxlHXnFtw0aKjsdfWD-RKhr2-mYgopQvVU8lyO94gZEsJ9UM79fjVRqEgplAti-oc3Tznym0wJs-axeXMQNSyRqTvDljIz5-KWpjh4j3lOYuLgvUzMFf44YYh_2Z5HWe80kPbhGTKIcMeuvJr2cpuaSYtGiIYf3-0wcNAHGlBL_3nKtx8YeO_W4a7VdLu96Fww";

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