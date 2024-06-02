import { Router } from 'express';
import { getAllCards, getCardsByNames, getOneCard } from '../controllers/allCardsController';

const allCardsRouter: Router = Router();

allCardsRouter.get('/allcards', getAllCards);
allCardsRouter.get('/allcards/:name', getOneCard);
allCardsRouter.get('/cards/by-names', getCardsByNames);

export default allCardsRouter;
