let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require("body-parser");

console.log("Hello World");

app.use(bodyParser.urlencoded({extended: false}))

app.get("/name", (req, res) => {
    let fullname = req.query.first + " " + req.query.last;
    res.json({name: fullname});
});

app.get("/:word/echo", (req, res, next) => {
    let word = req.params.word;
    res.json({echo: word});
    // next();
})

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
});

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get("/json", (req, res) => {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
    }
    res.json({message: message});
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
    // res.send("Hello Express");
});




































 module.exports = app;
