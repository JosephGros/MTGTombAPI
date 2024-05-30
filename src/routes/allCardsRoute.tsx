import { Router } from 'express';
import { getAllCards } from '../controllers/allCardsController';

const allCardsRouter: Router = Router();

allCardsRouter.get('/allcards', getAllCards);

export default allCardsRouter;
