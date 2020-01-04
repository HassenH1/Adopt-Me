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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNjNDY0M2UxZjAwNGMwYjNmMjExMmI1Njk4MTUwMzcyMmNhMDEwN2Y1Y2Q1Zjc3MjZiZWZiNjdjMzJmMDQ4NGE5MGI1YmRiODNjZDE0YjRlIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImNjNDY0M2UxZjAwNGMwYjNmMjExMmI1Njk4MTUwMzcyMmNhMDEwN2Y1Y2Q1Zjc3MjZiZWZiNjdjMzJmMDQ4NGE5MGI1YmRiODNjZDE0YjRlIiwiaWF0IjoxNTc4MDk2NzkzLCJuYmYiOjE1NzgwOTY3OTMsImV4cCI6MTU3ODEwMDM5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.xS4Ut17_iTS3g_MnVmIwIuIJIBd4QlUPTbu9mzI8zGogGAgZ3I4zdc6Sq2O3mcqkuQ-xO4H8Hxqd6ABv9_nHoc4kHtb3nLMaENaQ4Tts1vAi20cDI5BPjt6FJ58KW_8Nv-2FqfNeZuRsGJbkp46dZFgX71NO-xiQp4svsN-RciQWad_y3oFpi9ewtzd_EaJQKlNsxRtcNuCMRfIdQlDi3rfVS3ZQqOObwshLvMIj1A8uHgyXW51GVvx2jLuAnVCDUgYNs-h-FHhsvs8CBPZ-33NRJUpu6NLHYfOfBW9ji9sFinrpTgrpgBvgtLIdTyNhkbdiskjZBOn2frkAwdsrXA";

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