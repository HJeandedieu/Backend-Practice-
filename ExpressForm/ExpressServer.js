const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/submit-student-data", (req,res)=>{   
    res.send(req.body.firstName + " " + req.body.lastName + " enrolled successfully");
    console.log(req.body.firstName + " " + req.body.lastName + " enrolled");
})

app.listen(port, ()=>{
    console.log("server is running on port " + port)
})