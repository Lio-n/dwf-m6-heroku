"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/hola", function (req, res) {
    res.json("Todo Ok");
});
app.listen(3000, function () {
    console.log("Run server on port 3000");
});
