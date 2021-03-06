const express = require("express");
var cors = require("cors");
var route = express.Router();

route.use(cors());
const postModel = require("../models/post");

route.get("/", async (req, res) => {
    try {
        const posts = await postModel.findAll();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(404).send();
    }
});

route.post("/", async (req, res) => {
    try {
        console.log(req.body);
        if( Object.keys(req.body).length === 0) {
            res.status(200).send({resCode: 1, error: "Empty user info"});
        } else {
            const newPost = await postModel.save(req.body);
            res.status(200).json(newPost);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

route.put("/:id", async (req, res) => {
    try {
        const updatedPost = await postModel.update(req.params.id, req.body);
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

route.delete("/:id", async (req, res) => {
    try {
        await postModel.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

route.delete("/:id/comment", async (req, res) => {
    try {
        await postModel.deleteCommentByUser(req.params.id, req.body.user);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

module.exports = route;