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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQzZWRlZTIyMjUyODVhNDgzM2I3ODkzY2RjMTVmNzUyMzFlZjllZGE3YmZlMjBhZTVmMWU2MWIzYTlhYzUxYmZmYzM1NzQ1YWE3Yjc2YjFkIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImQzZWRlZTIyMjUyODVhNDgzM2I3ODkzY2RjMTVmNzUyMzFlZjllZGE3YmZlMjBhZTVmMWU2MWIzYTlhYzUxYmZmYzM1NzQ1YWE3Yjc2YjFkIiwiaWF0IjoxNTc3OTA2NDM3LCJuYmYiOjE1Nzc5MDY0MzcsImV4cCI6MTU3NzkxMDAzNywic3ViIjoiIiwic2NvcGVzIjpbXX0.RQ-jEKNtjFPrNqnJvcKHfZxkKuhz5i6hUOIGxUvT2Qu7NnIdNhhN_kTZrqWlDjVQZ6Jf5fJCwGIGU3I4zHB7C85FyTKREELHgHEA2L15oMVZingrJZxA98xVk8m5PL9mflPgcE63Scj09HntrmGElJvBJKJS9rzIekqcqWtT9gYXiUPpEly6eSd5_4vhyjCqdR_rLTgFS9SXRRVjxiG7IirE981oLSLK6y-EeGwRZbKyJ1FutzLQJfVfmMMB3WKsEaaX2Q9eqhUY-xclGGsq4S96SohZ_IHFGScD_tR7gWfLv--wZiAWFHH9GBEl-O_F2S-luNH8ICpV_WauaVdCNw";

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