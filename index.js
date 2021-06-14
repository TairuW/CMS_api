const express = require('express');
const app = express();

const login = require('./routes/login');
const register = require('./routes/register');
const getSms = require('./routes/getSms');

const department = require('./routes/department');

const port = 8000;

app.use(express.json());

app.use("/login", login);
app.use("/register", register);
app.use("/getSms", getSms);
app.use("/department", department);

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
