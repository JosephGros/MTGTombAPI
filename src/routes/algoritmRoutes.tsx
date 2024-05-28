import express from 'express';
import { getCommanderCards } from '../controllers/algoritmController';
import { getComThemeCards } from '../controllers/themeAlgoritm';

const recomendationrouter = express.Router();

recomendationrouter.get('/recommendation/:commanderName', getCommanderCards);
recomendationrouter.get('/theme/recommendation/:themeName', getComThemeCards);

export default recomendationrouter;