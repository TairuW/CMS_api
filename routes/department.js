const express = require("express");
var cors = require("cors");
var route = express.Router();

route.use(cors());
const departmentModel = require("../models/department");

route.post("/", async (req, res) => {
    try {
        const data = await departmentModel.save(req.body);
        res.status(200).send({ resCode: 0, message: "Success" });
    } catch (error) {
        res.status(404).send();
    }
});

route.get("/", async (req, res) => {
    try {
        const data = await departmentModel.findAll();
        res.json(data);
    } catch (error) {
        res.status(404).send();
    }
});

route.post("/update/status", async (req, res) => {
    try {
        await departmentModel.updateStatus(req.body);
        res.status(200).send({ resCode: 0, message: "Updated Department" });
    } catch (error) {
        res.status(404).send();
    }
});

route.post("/getdetails", async (req, res) => {
    try {
        const data = await departmentModel.findOne(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send();
    }
});

route.post("/update/details", async (req, res) => {
    try {
        await departmentModel.edit(req.body.id, req.body.data);
        res.status(200).send({ resCode: 0, message: "Updated Department" });
    } catch (error) {
        res.status(404).send();
    }
});


route.post("/delete", async (req, res) => {
    try {
        await departmentModel.delete(req.body);
        res.status(200).send({ resCode: 0, message: "Deleted Department" });
    } catch (error) {
        res.status(404).send();
    }
});

module.exports = route;