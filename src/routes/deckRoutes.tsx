import { Router } from "express";
import { getAllDecks, getDeckById } from "../controllers/deckController";

const deckRouter = Router();

deckRouter.get("/decks", getAllDecks);
deckRouter.get("/decks/:id", getDeckById);

export default deckRouter;
