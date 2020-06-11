import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import db from "./configs/db";
import mainRoute from "../src/routes/mainRoute"

const PORT = process.env.PORT || 4000;
const server = express();

const corsOptions = {
    origin: 'http://localhost:3000'
};

server.use(cors(corsOptions));
server.use(bodyParser.json());

server.use(mainRoute);

db.connection.sync({ force: true }).then(() => {
    server.listen(PORT, () => console.log(`Back-end server running on port: ${PORT}`));
});