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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1ZGUzYjM4YjczMjY3YmU2ZDI5YzNhM2IwN2Q5OTdmMDhmYmI0YjA3NjcyYWQ0NmJkZmEwODlmZDY2YzBiYmYyNjdhMDAxOTljYmFhNjNmIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjM1ZGUzYjM4YjczMjY3YmU2ZDI5YzNhM2IwN2Q5OTdmMDhmYmI0YjA3NjcyYWQ0NmJkZmEwODlmZDY2YzBiYmYyNjdhMDAxOTljYmFhNjNmIiwiaWF0IjoxNTc4MTg5Mzc1LCJuYmYiOjE1NzgxODkzNzUsImV4cCI6MTU3ODE5Mjk3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Falao8_Syjv2jdhlhikoUibGn3xRRouqigmT7qnJNMHLpCFp8DFzLbAc0EwDBLuvT-gFUHJXOeY7oI-zIkZT56Gl2QcXzLpPeJcypGnbWets2xEu-qV6IOyxwfRgls7yOrih5IfJhN8Rb-g8ZuAgKd3nK1mErXDoO9GCBUjOqYMVH8YgWeIbqCL106-7kZ-OlsmN0QIpK2TxpQ1jgq56TXEVxdvGiuSanC1Izu0CHNIdnjZtfVGZKkLcIGkw77Ec0hp0Xc1fsbeW7fMHc05hQfYhzQ07okvjQp8DNYMDBdFJ8KSanxIDOUDsX7bxj6XK60Cjr0zNb9JNUPatUP0jeg";

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