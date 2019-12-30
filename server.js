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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ1ZTgzYmFjYmUyYzAwOGVlYzE1MmFiZDljNjk3YmFlNTM0MjUxYTlmNzgxODVjOTJlNGJhYmQxZDQ4ZjYwODBiNDQwN2U0ZDUzOTA5NDg5In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImQ1ZTgzYmFjYmUyYzAwOGVlYzE1MmFiZDljNjk3YmFlNTM0MjUxYTlmNzgxODVjOTJlNGJhYmQxZDQ4ZjYwODBiNDQwN2U0ZDUzOTA5NDg5IiwiaWF0IjoxNTc3NzMzNDMwLCJuYmYiOjE1Nzc3MzM0MzAsImV4cCI6MTU3NzczNzAzMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.S2dDDQ6vgBlf6H6_62JI5mz81HQ1DPtrfV-O66MrYi6m3oLA9WxLfhbfJ61VgB6QXXSQ0_viCxCDZhZNLf5yFUGYplbecl-HLpAu3gVhNPjhVk5WxXmnK6jHSQ22-YWazf6CKiSF3RqFTa-nPejgI0PTCtIh2ZnMh29a-_8NkMhQjah7wpndD4-9xuJHetJB3hYuQ7lyttMUaEUk1GuYAhqTRoQ-B7pJOS47azYoIAA6MSlZiZl68QRW3CJVg8ssQC1B22fBVl5IFS1e9BX_pLbaS4RMRWRMJ9ZJOe8fYBOhwJ49DGjDItJ7B72EOURtQxDmmzZlhFexSgGHQrhSNA";

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