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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEyOWE4ZjgzM2EwMDU5YTA0YmI3Y2Y2N2FmNTg2MjUwY2Y5NzZiMDRjNGExNGQ1ODk4ZWM3NmZhY2FhYzI1N2Q2MTczZmZhOGZlN2ZiNzhjIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6IjEyOWE4ZjgzM2EwMDU5YTA0YmI3Y2Y2N2FmNTg2MjUwY2Y5NzZiMDRjNGExNGQ1ODk4ZWM3NmZhY2FhYzI1N2Q2MTczZmZhOGZlN2ZiNzhjIiwiaWF0IjoxNTc3ODM3MzUwLCJuYmYiOjE1Nzc4MzczNTAsImV4cCI6MTU3Nzg0MDk1MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Aax5822jruwn8OwMYFoeWzsHoTUA4x7eVvnoqpFcNA5nX4Q1p5LcDIIkLnknMvm_fQg5b8u_57LMwQXJbh0MYQ_2BXeq4qMFZx_AnYD_dwSCPdBibja7QUjv01gpty3E5cBT-gsHXnn10_Zx_5t958U_3wrWov37vgbMvD68TYhulgHkpa2dkO-dSHzGCUdsOelTtata8lhpdTIGzewhsOjTYhvLFeoTjL-rxujI_-X2Megn9EXMXXumHSExz7pwjftrkmiJ5KDX6xnbSHNY8h6vnonYJxHvyVzxP8fUYGfDO1zB8RaVHKjGQGK2OcMtkxlVUCo1HNhI_J9ID54S9g";

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