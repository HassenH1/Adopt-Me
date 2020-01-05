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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg4OTllNTk0ZDQ3ZDkxZjBkOWE5MDkzN2VmNzg1YmNmNTUwM2E3NDdlNmFmYTc4MmU1NzhlZDQwZmQyMTVmMTJlMzY0ZDA5ZGJjMmRhYjM2In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6Ijg4OTllNTk0ZDQ3ZDkxZjBkOWE5MDkzN2VmNzg1YmNmNTUwM2E3NDdlNmFmYTc4MmU1NzhlZDQwZmQyMTVmMTJlMzY0ZDA5ZGJjMmRhYjM2IiwiaWF0IjoxNTc4MjQ4MDI2LCJuYmYiOjE1NzgyNDgwMjYsImV4cCI6MTU3ODI1MTYyNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.j_eg0vqKFSJ-3lnMeExYwzKdCSBXPsvYcDRML46h0XNNr-C02XoZ_Hd-su8nyBVnIX8HutPKiVJSzFkjZ-oc7euU_ElzN0_-XYRXljZD-fryVmxXYvWVqZVqy3jAOf31AWsQWXykGzxQdH_bVDB60h_zQgc0nq2STi2tkv1l7AUSbiNsBICoFq45KbyAIwm7M8qta_ht9CBaBrldSeWdt57cm6Gr8Way9bHSwTiTEEsgQ6LK-iC5y_-LpTztXbXndJ28Mt6o9Is_KwbG3N8nGR1A3vPmLelLZcrKMZ0P7do0VtqXOyUSZSylAN2DTlRWZCGpPRc5cAnWDaOE2HyMNA";

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