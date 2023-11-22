const express = require('express')
const app = express()

app.get("/country/:name", (req, res) => {

  try{
    const {name} = req.params
    fetch(`https://restcountries.com/v3.1/name/${name}`)
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

app.get("/apitest", (req, res) => {
    res.json({"countryInfo": ["name", "capital", "population", "currencies"] })
})

app.listen(5000, () => {console.log("Server started on port 5000")})