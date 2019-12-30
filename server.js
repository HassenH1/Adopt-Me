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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcxMGYwZGU1ZGNlMzBiZWY5NzRhMjc1YmI5ZTIwZTUzZGI4ZDg1MzdlNzg5ZDdmOGNkMDNkYjM2MjBmMzcxZGMzZmM0NTRhYjA2YTc1Yjk0In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjcxMGYwZGU1ZGNlMzBiZWY5NzRhMjc1YmI5ZTIwZTUzZGI4ZDg1MzdlNzg5ZDdmOGNkMDNkYjM2MjBmMzcxZGMzZmM0NTRhYjA2YTc1Yjk0IiwiaWF0IjoxNTc3NzI5NDM4LCJuYmYiOjE1Nzc3Mjk0MzgsImV4cCI6MTU3NzczMzAzOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.NLUW8qAeol6txnzPB9IQSwGZKwTEWTiMDGg9NBtWuWruC0ZbazQ8mqd4zWo1_qkvNlsfYhHe5RU4xqGDMRtHCUKQoh8Oyeh4hmhKJhKPvRqUEDmN8CVRL8l1Wz6adOp9oK9PTfK0j2vq1AXlg0imUX3V-3hjeL5S2d23rZ2Ujduo-xKgCQuhILw92foLOkpgldGWBfrpreWKGuPQxrRLMkH3g_QwjBeRvB5aSej46EyNXzKDxmFGZNwjxWIGlWOXXLp7pXXra6z768h3xEdcbfz0_fsEya40KtmWrVq49Uy950PNmfawZ2w_Ka8yiWyzUTFwKIMBf6hk5_OPiN4Jrg";

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