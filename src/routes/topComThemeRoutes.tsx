import { Router } from "express";
import { getAllThemes, getThemeByName } from "../controllers/topComThemeController";

const topComThemeRouter = Router();

topComThemeRouter.get("/themescom", getAllThemes);
topComThemeRouter.get("/themescom/:name", getThemeByName);

export default topComThemeRouter;