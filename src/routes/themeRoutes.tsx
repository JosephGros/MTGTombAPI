import { Router } from 'express';
import { getAllThemes, getCardsByTheme } from '../controllers/themeController';

const themeRouter = Router();

themeRouter.get('/themes', getAllThemes);
themeRouter.get("/theme/:name", getCardsByTheme);

export default themeRouter;