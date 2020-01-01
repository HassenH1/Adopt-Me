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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhYWEyM2MzNDE4YzYzY2JiNDc2NzYxMDIxMTA2ZWMyMzdiZDMwYjczYmYzNDY1NjgzN2MzOTA1ZTVmNDA2NWY2YzcyZTZiMThmNGJkZTQ1In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjJhYWEyM2MzNDE4YzYzY2JiNDc2NzYxMDIxMTA2ZWMyMzdiZDMwYjczYmYzNDY1NjgzN2MzOTA1ZTVmNDA2NWY2YzcyZTZiMThmNGJkZTQ1IiwiaWF0IjoxNTc3OTAyNjkyLCJuYmYiOjE1Nzc5MDI2OTIsImV4cCI6MTU3NzkwNjI5Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.suMKsIfXBw9Fmf_TSo2qrtWLRbSM-TA_8m7SLl7gwED2MzqHmstnvBhSaMgjfcEqU_8jsicK--TN22r1f3Z4tlbJPei8SsJtuBmGG7_lwa4N1ui_ZCE6onNe67Gv9LiSodTw7nrEJ--Rpp1cMjsEA_HC4j_vcHFdeU59QlHSHwe1ZspXyRHNUqnjhrTxCIBrlKMjqxVe5wjuKupIcgeEIX5pYmjgkzTEIHwYzwWxl6HbzAxxWLvkvYHpmXRLZUzsNPCQ2-PUasI-RIMKFU0RN3LMz358f0RYOnzp2V5iPxznX5RkfJwI93xZmk_P78YBLJlh-qOLNoo87OdsaST8CQ";

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