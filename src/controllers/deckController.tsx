import { Request, Response } from "express";
import Deck from "../models/deckModel";

export const getAllDecks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { color, page = 1, limit = 20 } = req.query;

    const query = color ? { color } : {};
    const options = {
      page: Number(page),
      limit: Number(limit),
      select: 'deckName color'
    };

    const result = await Deck.paginate(query, options);

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getDeckById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deck = await Deck.findById(id);

    if (!deck) {
      res.status(404).json({ message: "Deck not found" });
      return;
    }

    res.status(200).json(deck);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};