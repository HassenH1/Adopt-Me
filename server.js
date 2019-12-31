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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY0ZDdmYzEyZTBmMTkyZThjOGRhNzQ1NzFlYTg1YWNiMGUyMWRlMzA0MzJjZDIzZjYwYTE0ZDdmM2VlODFhMGYwMWUwNjcxNGE0NWY1ODNiIn0.eyJhdWQiOiJOa1N3OUJuTE04bmI0dUZqYkFoY1VFZWlEZUhta2EzQkNXVDExNWhObERsb0x1b2hkZiIsImp0aSI6ImY0ZDdmYzEyZTBmMTkyZThjOGRhNzQ1NzFlYTg1YWNiMGUyMWRlMzA0MzJjZDIzZjYwYTE0ZDdmM2VlODFhMGYwMWUwNjcxNGE0NWY1ODNiIiwiaWF0IjoxNTc3NzU5MzQyLCJuYmYiOjE1Nzc3NTkzNDIsImV4cCI6MTU3Nzc2Mjk0Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.hqWL2AeYTdePUsnQNM43XIG7DgVr63pLlTOfY_03LK26QowdGSGWz_wpdIeynNOneSkN0rRVrC62XgxKdTDcsmUY3RNjArGU_LoFS034n9oCbhZ-alveRrotFS_-0RFwooWWeQanZeFmWg-wxbcAdixlaQ7fnuLlqrNo2EMzu0Xct9ohO5K9e7aliXS9wc0HhW0g1jxAOLZZSygoWDzEp9CyYm27xTBLgHh4eqbo5_sFAeEXsbkKD6x2WfenI30zdEM_21y9t8BJsrkL3os21nZcrq4JOoYwG1ypbOqtmiZPAp_VK4DdmH_sW2Az3o_i7Tr2ooQiGjSuub5ERdvA9w";

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