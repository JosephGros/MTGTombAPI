import { Request, Response } from 'express';
import Card from '../models/allCardsModel';

export const getCardByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    if (!name) {
      res.status(400).json({ error: 'Name query parameter is required' });
      return;
    }
    const card = await Card.findOne({ name: new RegExp(name as string, 'i') });
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: 'Card not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
