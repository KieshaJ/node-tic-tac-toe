import { Model, DataTypes } from "sequelize";

import ActionTypes from "../utils/actionTypes";
import GameStates from "../utils/gameStates";

class Action extends Model {}

module.exports = (connection) => {
    Action.init({
        player: {
            type: DataTypes.SMALLINT,
        },
        actionType: {
            type: DataTypes.ENUM,
            values: Object.values(ActionTypes),
            allowNull: false
        },
        xPos: {
            type: DataTypes.SMALLINT
        },
        yPos: {
            type: DataTypes.SMALLINT
        },
        gameState: {
            type: DataTypes.ENUM,
            values: Object.values(GameStates),
            allowNull: false
        },
        gameUuid: {
            type: DataTypes.UUIDV4,
            allowNull: false
        }
    }, {
        sequelize: connection,
        modelName: 'action'
    });

    return Action;
};