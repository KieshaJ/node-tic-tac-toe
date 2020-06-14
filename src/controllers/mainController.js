import db from "../configs/db";
import TicTacToe from "../lib/tictactoe";
import ActionTypes from "../utils/actionTypes";

const actions = db.actions;
let game;

const getGame = (req, res) => {
    res.status(200).json(game);
};

const createGame = (req, res) => {
    game = new TicTacToe();
    const newAction = {
        actionType: ActionTypes.NEW_GAME,
        gameState: game.state,
        gameUuid: game.uuid
    };

    actions.create(newAction).then((data) => {
        res.status(200).json({ game, data });
    });
};

const createAction = (req, res) => {
    const { player, xPos, yPos } = req.body;

    let boardClone = game.board;

    boardClone[xPos][yPos] = player;
    game.gameBoard = boardClone;
    game.gameState = game.evaluateGameState();

    const newAction = {
        player,
        xPos,
        yPos,
        actionType: ActionTypes.MOVE,
        gameState: game.state,
        gameUuid: game.uuid
    };

    actions.create(newAction).then(data => {
        res.status(200).json({game, data});
    });
};

const listActions = (req, res) => {
    actions.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(data => {
        res.status(200).json(data);
    });
};

module.exports = {
    getGame,
    createGame,
    createAction,
    listActions
};