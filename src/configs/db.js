import Sequelize from "sequelize";

import Action from "../models/action";

const connection = new Sequelize('sqlite::memory:');

const db = {
    Sequelize,
    connection,
    actions: Action(connection)
};

module.exports = db;