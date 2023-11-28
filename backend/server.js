const express = require('express')
const app = express()

app.get("/country/:name", (req, res) => {

  try{
    const {name} = req.params
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        res.send(data)
      })
      .catch(err => console.log('Error:', err.message));

  }catch(e){
    res.send(404).render('error', {message: "Country not found..."})
  }
  
})

app.get("/country/welcome/index", (req, res) => {

  res.json([
    {
      "name": {
        "common": "Search for a country using the text bar above",
        "official": "Search for a country using the text bar above"
      },
      "capital": " ",
      "currencies": [
        {
          "code": " ",
          "name": " ",
          "symbol": " "
        }
      ],
      "population": ' ',
      "region": " ",
      "demonyms": {
        "eng": {
          "m": " "
        }
      },
      "flags": {
        "png": '/bounce-links.png'
      }
    }
  ])

})

app.listen(5000, () => {console.log("Server started on port 5000")})