const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=new york&appid=dc98595592480b61420cbef0fb3d02b4&units=imperial"
    https.get(url, function(response){
        console.log(response.statusCode);
        // "data" keyword found from nodejs built in https require doc
        response.on("data", function(data){
            console.log(data);
            const weatherData = JSON.parse(data)
            console.log(weatherData)
            const temp = weatherData.main.temp
            console.log(temp);
        })
    })
    res.send("Server is Up and running")
    res.send("Test")
})



app.listen(3000, function(){
    console.log("Server is running on port 3000")
})