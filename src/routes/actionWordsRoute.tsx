import { Router } from "express";
import { getAllActionWords, getActionWordByName, getActionWordsByLetter } from "../controllers/actionWordsController";

const actioWordsRouter = Router();

actioWordsRouter.get("/actionwords", getAllActionWords);
actioWordsRouter.get("/actionwords/:name", getActionWordByName);
actioWordsRouter.get("/actionwords/letter/:letter", getActionWordsByLetter);

export default actioWordsRouter;