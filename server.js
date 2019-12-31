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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk3NjUzNTkzM2U3MGJjOWEwZTVkZTYwYzFiZjY2YjI4ZTM3N2U2NGYzYjY4MmE0MTNlY2YyYzM2MDU3ZjIwMzhiOTdjMGY3MGJlYjk3YTBiIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6Ijk3NjUzNTkzM2U3MGJjOWEwZTVkZTYwYzFiZjY2YjI4ZTM3N2U2NGYzYjY4MmE0MTNlY2YyYzM2MDU3ZjIwMzhiOTdjMGY3MGJlYjk3YTBiIiwiaWF0IjoxNTc3NzU1MTI0LCJuYmYiOjE1Nzc3NTUxMjQsImV4cCI6MTU3Nzc1ODcyNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.RaKprmsy08pzGyKYfrC5aIC_gkWGEumVXM_nWUuIqrMsLA2jq7ao1E4PXl7oNo4gxrdpf1AySJW8ypC5_i_nEuaN-1lANviqr5nC2SLha0kO1tE8Db-75dgx1q32VRPx354I-GBurYerxQAIVl7rDD6mT1BOv3KVe9fSN4n588xcrvs1XCn70ff15JjVK2n06PH9Y6QQ1cfsQQ4yz7UQ2YuW49ak-v9bDfJ7-3tPoRz9Ys3gutlOJ_RWmm69YRUHH-rz3wiAzL7ozAR4MKmxETXP55bB90JRkKrZ64EeCuqp4SUdVpbZDWnzE39ouDzJFsSS6RbkTJTN5FviFfxREg";

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