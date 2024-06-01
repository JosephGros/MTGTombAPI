import { Router } from 'express';
import { getAllThemes, getThemeDetails } from '../controllers/themesDetailsController';

const themeDetailRouter = Router();

themeDetailRouter.get('/theme/details', getThemeDetails);
themeDetailRouter.get('/themes/details', getAllThemes);

export default themeDetailRouter;
