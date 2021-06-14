const express = require("express");
var cors = require("cors");
var route = express.Router();

route.use(cors());

route.get("/", (req, res) => {
    try {
        let code = Math.random().toString(36).substring(7);
        res.send({captcha: code});
    } catch (error) {
        res.status(404).send();
    }
});

module.exports = route;