import { Request, Response } from "express";
import Card from "../models/allCardsModel";

export const getAllCards = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getOneCard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.query;
    if (!name) {
      res.status(400).json({ error: "Name query parameter is required" });
      return;
    }
    const card = await Card.findOne({ name: new RegExp(name as string, "i") });
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getCardsByNames = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { names } = req.body;
    if (!Array.isArray(names) || names.length === 0) {
      res.status(400).json({ error: "Names array is required" });
      return;
    }
    const cards = await Card.find({
      name: { $in: names.map((name) => new RegExp(name, "i")) },
    });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
