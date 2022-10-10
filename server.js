//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (request, response){
    response.send("Hello");
    console.log(request);
});

app.get("/contact", function (request, response){
    response.send("ratikantmohant@gmail.com");
    console.log(request);
});

app.get("/about", function (request, response){
    response.send("ratikant");
    console.log(request);
});

app.get("/hobbies", function (request, response){
    response.send("hobbies");
    console.log(request);
});

app.listen(9950, function (){
    console.log("Server started on port 9950.")
});