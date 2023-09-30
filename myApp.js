let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

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
