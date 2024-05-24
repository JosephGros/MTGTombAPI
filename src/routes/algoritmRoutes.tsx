import express from 'express';
import { getCommanderCards } from '../controllers/algoritmController';
import { getComThemeCards } from '../controllers/themeAlgoritm';

const recomendationrouter = express.Router();

recomendationrouter.post('/recommendation', getCommanderCards);
recomendationrouter.post('/theme/recommendation', getComThemeCards);

export default recomendationrouter;