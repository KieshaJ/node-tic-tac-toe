import request from "supertest";
import server from "../src/server";

describe('Main routes', () => {
    it('creates new game',() => {
        request(server).get('/new').then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('game');
            expect(res.body).toHaveProperty('data');
        });
    });

    it('gets current game',() => {
        request(server).get('/game').then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('gameBoard');
            expect(res.body).toHaveProperty('gameState');
            expect(res.body).toHaveProperty('gameUuid');
            expect(res.body.gameState).toEqual('START');
        });
    });

    it('gets all actions',() => {
        request(server).get('/actions').then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveLength(1);
        });
    });
});