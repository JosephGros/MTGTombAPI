import express from 'express';
import { getCommanderCards } from '../controllers/algoritmController';

const recomendationrouter = express.Router();

recomendationrouter.post('/recommendation', getCommanderCards);

export default recomendationrouter;