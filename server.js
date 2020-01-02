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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwOWYwMDE3YThhNjgxOTQ1YWVlY2JmZTBjZjg3OGU3ZmU0ZmFiN2I2ZjJkZDVhMzUzMzgzMzQxMjJiZTFmOGVhZGMxMjU0YmFlMjUyMGNhIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImQwOWYwMDE3YThhNjgxOTQ1YWVlY2JmZTBjZjg3OGU3ZmU0ZmFiN2I2ZjJkZDVhMzUzMzgzMzQxMjJiZTFmOGVhZGMxMjU0YmFlMjUyMGNhIiwiaWF0IjoxNTc3OTQ1NzI0LCJuYmYiOjE1Nzc5NDU3MjQsImV4cCI6MTU3Nzk0OTMyNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.GzUXSVsZKF3I2mwGhBuYG2dXtwGVlqYJBumHUw5rTqHiIXWt-bkNmQQRt48K-EW9JJ8xPLqAjn-xHmNQZ6LMHrxydVFAoBbm5Dci2ucMLUAC_sbZHmiNX3LjCdg5LOU6VgquwgWmE-TdM4rMyfFAAhkNWDc0SsZP9BVs0tOw70f8it2MhQNSpJO9-f2yTvEf9KY9IdMS0cEtsHibvfMu6y6PjF3zsbOqw0FenaoFTOyitZkuUIeAkKtugHepIMXxDJy3qDl2mqkubjf2IpZyoHYGE-DVgFpab6kU8zQHxMAYyrFu7OZQ0P_cRYv11m3TSfgTokpP-ltyufIw3nvFFA";

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