import express from 'express';
import { getAllGameMechanics, getGameMechanicByName, getGameMechanicsByLetter } from '../controllers/gameMechanicsController';

const gameMechanicsRouter = express.Router();

gameMechanicsRouter.get('/gamemechanics', getAllGameMechanics);
gameMechanicsRouter.get('/gamemechanics/:name', getGameMechanicByName);
gameMechanicsRouter.get('/gamemechanics/letter/:letter', getGameMechanicsByLetter);

export default gameMechanicsRouter;
