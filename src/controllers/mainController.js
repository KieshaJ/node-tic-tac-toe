import db from "../configs/db";
import TicTacToe from "../lib/tictactoe";
import ActionTypes from "../utils/actionTypes";

const actions = db.actions;
let game = new TicTacToe();

exports.getGame = (req, res) => {
    res.status(200).json(game);
};

exports.createGame = (req, res) => {
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

exports.createAction = (req, res) => {
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

exports.listActions = (req, res) => {
    actions.findAll().then(data => {
        res.status(200).json(data);
    });
};