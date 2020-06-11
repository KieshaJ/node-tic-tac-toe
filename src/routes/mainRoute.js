import express from "express";
import MainController from "../controllers/mainController";

const router = express.Router();

router.get('/game', MainController.getGame);
router.get('/new', MainController.createGame);
router.post('/action', MainController.createAction);
router.post('/actions', MainController.listActions);

module.exports = router;