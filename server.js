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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkNjZlMWY0OTk1ZGU1NWFkZmM2YWQwNWNhODNmNzQxMGNiODVmZDAyMzdiZWU3MWNhOGNkNjQ1NTI0NzNjOWI4YzA1ZjJkZTY3YmUzYzhhIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjBkNjZlMWY0OTk1ZGU1NWFkZmM2YWQwNWNhODNmNzQxMGNiODVmZDAyMzdiZWU3MWNhOGNkNjQ1NTI0NzNjOWI4YzA1ZjJkZTY3YmUzYzhhIiwiaWF0IjoxNTc4MjQ0MzU0LCJuYmYiOjE1NzgyNDQzNTQsImV4cCI6MTU3ODI0Nzk1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.BFn1YLBnAE2EaYxLUlU0bKRpheSEVCnFA26CvW-VibgA0vHaVWUJkzN3yohReG-QenqnfBg1o_fMHu5konbeyy-49cd4KGMwxAxT-hhdaDB7UERREQCyLwx8Mk0mY520DPDjf2bmtzgW8ycmPco-9DtSzY0962S5qV6wazWwqveiZ4-W3HKb9efXLH0skAxDC4sfbURc_WfuCXND5mlfaS2vnhzeoQmUHY6tzI5NTkKKxJmTiOi1OpGvJHJ4ZcILcxkWx1OCFScpwpLNyD91Xn6943U46UAW6LWDYWqnwEQKyOI0WO-8m9xGnml7FE4MP3__uxNQ9xj8d5dO2gaBaQ";

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