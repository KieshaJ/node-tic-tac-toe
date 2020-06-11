import { v4 } from "uuid";

import GameStates from "../utils/gameStates";

const winCombinations = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

const initBoard = () => {
    return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}

const generateGameUuid = () => {
    return v4();
}

class TicTacToe {
    constructor() {
        this.gameBoard = initBoard();
        this.gameState = GameStates.START;
        this.gameUuid = generateGameUuid();
    }

    get board() {
        return this.gameBoard;
    }

    set board(newBoard) {
        this.gameBoard = newBoard;
    }

    get state() {
        return this.gameState;
    }

    set state(newState) {
        this.gameState = newState;
    }

    get uuid() {
        return this.gameUuid;
    }

    evaluateGameState() {
        let empty = 0;

        winCombinations.forEach(combination => {
            let p1 = 0;
            let p2 = 0;

            combination.forEach(coordinatePair => {
                const xPos = coordinatePair[0];
                const yPos = coordinatePair[1];

                if(this.gameBoard[xPos][yPos] === 1) p1++;
                if(this.gameBoard[xPos][yPos] === 2) p2++;
                if(this.gameBoard[xPos][yPos] === 0) empty++;
            });

            if(p1 === 3) return GameStates.PLAYER_1_WIN;
            if(p2 === 3) return GameStates.PLAYER_2_WIN;
        });

        if(empty === 0) return GameStates.DRAW;

        return GameStates.IN_PROGRESS;
    }
}

module.exports = TicTacToe;
