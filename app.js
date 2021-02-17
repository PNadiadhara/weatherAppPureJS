const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=new york&appid=dc98595592480b61420cbef0fb3d02b4"
    https.get(url, function(response){
        console.log(response.statusCode);
        // "data" keyword found from nodejs built in https require doc
        response.on("data", function(data){
            console.log(data);
        })
    })
    res.send("Server is Up and running")
})



app.listen(3000, function(){
    console.log("Server is running on port 3000")
})