import express from 'express';
import { getCommanderCards } from '../controllers/algoritmController';
import { getComThemeCards } from '../controllers/themeAlgoritm';

const recomendationrouter = express.Router();

recomendationrouter.get('/recommendation', getCommanderCards);
recomendationrouter.get('/theme/recommendation', getComThemeCards);

export default recomendationrouter;