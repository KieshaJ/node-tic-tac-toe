import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mainRoute from "../src/routes/mainRoute"

const server = express();

const corsOptions = {
    origin: 'http://localhost:3000'
};

server.use(cors(corsOptions));
server.use(bodyParser.json());

server.use(mainRoute);

module.exports = server;