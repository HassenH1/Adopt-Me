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

app.get('/', function (req, res) {
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU5ZTNiMzRmYzMyNmIxNTI1MDg4YmZjNzI1NDkyMjY0NmU4NWNiY2EyM2FlY2UyYWM2Zjc5Yjc3NzhhNzQ1Nzg4MzAxN2VkNTcyN2ZkNTRiIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjU5ZTNiMzRmYzMyNmIxNTI1MDg4YmZjNzI1NDkyMjY0NmU4NWNiY2EyM2FlY2UyYWM2Zjc5Yjc3NzhhNzQ1Nzg4MzAxN2VkNTcyN2ZkNTRiIiwiaWF0IjoxNTc3NTc3MjQ2LCJuYmYiOjE1Nzc1NzcyNDYsImV4cCI6MTU3NzU4MDg0Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.MFf-3_zjZw3Agdkl3CwTTofeoh_0po6-AE376XFknpyT1LqXSzzISgD0ted6pj1B-japIrlbYm9ZJUG2oTV7fCf7v52M1wvFr4d-mD6_kkey65DNn1IKD-Cx7bFc4vkAeIspe_gpWI1ZPf2HfXJGptND6wbLXx_iOQ77GW0J_jAknA9vEM9N_B5IXF0312rR42DZBLxgEKzyGdfAl1BvofWpCVLMu4V7uw0IeAO3T3kUc5S3vAZrgvfWPt5Jg9Tuz5U1BnR2TmVLpmbEmDg05j7EW59i8DOcVgGK-BQG6rwZZ-df4Z_qN7SI0-1OxINR3y_0Gv8V22tkI4LYNzXN3g";

fetch('https://api.petfinder.com/v2/animals?sort=random', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(json => res.send(json));
})

// app.get('/', (req,res) => {
//   res.json("hitting in the front end inshallah")
// })
 
app.listen(PORT, () => {
  console.log(`server running on ${PORT} port`)
})