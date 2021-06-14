const express = require("express");
var cors = require("cors");
var route = express.Router();

route.use(cors());
const userModel = require("../models/user");

route.post("/", async (req, res) => {
    try {
        var found = 1;
        const data = await userModel.findAll(req.body);
        data && data.map(item => {
            if (item.username == req.body.username && item.password == req.body.password) {
                found = 0;
                res.status(200).send({resCode: 0, message: "Successfully Logged in"});
            }
        });
        if (found === 1) {
            res.status(200).send({resCode:1, message: "User does not exist"});
        }
    } catch (error) {
        res.status(404).send();
    }
});

route.get("/", async (req, res) => {
    try {
        const data = await userModel.findAll();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(404).send();
    }
});

module.exports = route;