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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4MDY4YjY4NTNmMDNhYTFhYTkwNGExNWIxYzQ2OTQzZDgxY2EyZTNiODRhMjNiNTAyMjAzODE3YTI1MWE2N2E5ZmMzZTM5ZDZmMjU1MzZkIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImU4MDY4YjY4NTNmMDNhYTFhYTkwNGExNWIxYzQ2OTQzZDgxY2EyZTNiODRhMjNiNTAyMjAzODE3YTI1MWE2N2E5ZmMzZTM5ZDZmMjU1MzZkIiwiaWF0IjoxNTc3NzYzMDIxLCJuYmYiOjE1Nzc3NjMwMjEsImV4cCI6MTU3Nzc2NjYyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.IgMLkN8MH7vSHR-5xcBb6IY19JZ4R2kDe5RMJe3INLlRh7ru1YkOErt7mNVaPGAsqu0QdYahPh9ocAh47ovNnMUZf4jHT3sFvfkTmAj8_zfxR6b3NSoxLl2hhIs_MQG6epBBDdzytHxCqalss8Lcbyfka3gA7wWRtr77jy8KP8kNGWF6o6z8ev1uZ6NUSaOSIY5851YF6XrQarzqfjFTnttPdyh8gJTbDwfy4UxSAJj-8XPIinsDZMNr3RbF0WUYpTjK1zSUrWXl8SLbZOpsufXM5Ftv09kjfEGQ7H8CMw4l6Mb5sb1l0Gstwu2RyEh8B-pZ6-WZPPwkuF7eL6ANMQ";

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