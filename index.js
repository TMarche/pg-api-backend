const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);
const port = 4000;
const helmet = require("helmet");

const { generateUsers } = require("./util");

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Accept"
    );
    next();
});

//pre-flight requests
app.options("*", function (req, res) {
    res.send(200);
});

server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    /* eslint-disable no-console */
    console.log("Node Endpoints working :)");
});

app.get("/test", (req, res) => {
    setTimeout(() => {
        res.send("Complete");
    }, 1000);
});

app.get("/getData", (req, res) => {
    setTimeout(() => {
        res.send(generateUsers(20));
    }, 1000);
});

app.get("/getUsers", (req, res) => {
    setTimeout(() => {
        res.send(generateUsers(1000));
    }, 1000);
});

module.exports = server;
