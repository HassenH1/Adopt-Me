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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdhMmVhNDMwOWNiNzJlOTAyOGNjMDc1NzMyZTkzMmE0OTBhOGQwNTllNWY3MTdiNDU4NDQxYjdmNTU1YTZiOWVhODdmODQ4ZGU0N2M5OTljIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjdhMmVhNDMwOWNiNzJlOTAyOGNjMDc1NzMyZTkzMmE0OTBhOGQwNTllNWY3MTdiNDU4NDQxYjdmNTU1YTZiOWVhODdmODQ4ZGU0N2M5OTljIiwiaWF0IjoxNTc3NzY2ODkzLCJuYmYiOjE1Nzc3NjY4OTMsImV4cCI6MTU3Nzc3MDQ5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.iHwRIH1jVn0cottqUKjup1_PF2VjKqIICH_ehqW5DrSeErkS03E5b_w279Z1_R1C8ACCf6feslQ1QX_rdDQ4sPlskIJxOppmTy93I_-5yrbPGStMsgHUIdtNejJjPR05mkR2NDT2E4owBZaC5JZhMGcZmXu_6O3KwPEgPMmo1FQQfooXx37pCuTVguW3lvCgbpxZaxkL3HWFpsLJEkahNvUhSABV9ld2EdOqWKbrxArOQzH-uLHv4JS8p-4VbbSOraBxrZMTPI-AUy2kOrm5dYm_MFzWIjUVzTWIQvnSTfVRo_1QSn5fOYq3GEJHFUs-HPN-T-VKbdjRCE2aS-1ZlA";

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