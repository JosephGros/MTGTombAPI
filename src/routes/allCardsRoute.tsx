import { Router } from 'express';
import { getAllCards, getOneCard } from '../controllers/allCardsController';

const allCardsRouter: Router = Router();

allCardsRouter.get('/allcards', getAllCards);
allCardsRouter.get('/allcards/:name', getOneCard);

export default allCardsRouter;
