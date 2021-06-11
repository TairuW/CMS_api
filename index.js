const express = require('express');
const app = express();
const post = require('./routes/post');
const port = 8000;

app.use(express.json());

app.use("/post", post);

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/', (req, res) => {
    console.log("req", req.body);
    res.status(201).send();
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
