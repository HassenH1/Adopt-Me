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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEzMzM5ZDZkNzgxNWI1NTE1Y2MyMDU0NDA0MzgwYTJkZTAwZTI0YmI2YmJmOGVhMjQ4MDU5OTE5Y2JlYTIyYzU1MTkxOTI5OWQ2NWQwMjU1In0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjEzMzM5ZDZkNzgxNWI1NTE1Y2MyMDU0NDA0MzgwYTJkZTAwZTI0YmI2YmJmOGVhMjQ4MDU5OTE5Y2JlYTIyYzU1MTkxOTI5OWQ2NWQwMjU1IiwiaWF0IjoxNTc3OTMzMjQxLCJuYmYiOjE1Nzc5MzMyNDEsImV4cCI6MTU3NzkzNjg0MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.vtgyYUf06s_JHRny8hIePBIJks1II9KhbiH5qvrjkebIJPgQZRZjdmMKIrsqsEffe5AVyGgx1SQgys6A6v6tay4b6Hn9HikS78pC70qwNWdUfWma83JE2ZcwJ9by6FjE6KIEv3Xlin3iHMpmiN5Qt35rl1OTyN_xSTQv6zWD175wyeN89nnNuzgnkGRNCxt7LbfLF1msFYqhEcmtLSMbGHmF-UB7WxFibayf5Hwtp7GIs2kvTzUVUtW_XcnzJhrPAHY0JVJ5ZRTQBlA_cFUYGFFNq9NQDbLzCyC-q1Hqj1kn5iXXcldNp4Xk34gj2DS__2_mpsokFfnYiRBVgMnltw";

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