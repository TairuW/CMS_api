const express = require("express");
var cors = require("cors");
var route = express.Router();

route.use(cors());
const userModel = require("../models/user");

route.post("/", async (req, res) => {
    try {
        await userModel.save(req.body);
        res.status(200).json({resCode: 0, message: "Successfully registered"});
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = route;