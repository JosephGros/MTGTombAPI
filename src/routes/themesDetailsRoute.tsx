import { Router } from 'express';
import { getAllThemes, getThemeDetails } from '../controllers/themesDetailsController';

const themeDetailRouter = Router();

themeDetailRouter.get('/theme/details/:name', getThemeDetails);
themeDetailRouter.get('/themes/details', getAllThemes);

export default themeDetailRouter;
