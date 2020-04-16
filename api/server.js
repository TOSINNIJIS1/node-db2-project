const express = require("express");

const db = require("../data/db-config.js");

const Router = require('../car/Router.js');


const server = express();

server.use(express.json());

server.use('/cars', Router)


server.get('/', (req, res) => {
    res.status(200).json({api: 'up'})
})

module.exports = server;
