const helmet = require("helmet");
const cors = require("cors");
const express = require("express");

const storiesRouter = require("../stories/stories-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/stories", storiesRouter);

server.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = server;
