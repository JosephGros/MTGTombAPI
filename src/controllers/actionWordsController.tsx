import { Request, Response } from "express";
import ActionWords from "../models/actionWordsModel";

export const getAllActionWords = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const actionWords = await ActionWords.findOne().lean();
    if (!actionWords) {
      res.status(404).json({ message: "Action words not found" });
      return;
    }
    res.status(200).json(actionWords);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getActionWordByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.params;
    const firstLetter = name.charAt(0).toUpperCase();
    const actionWords = await ActionWords.findOne().lean();

    if (
      !actionWords ||
      !actionWords[firstLetter] ||
      !actionWords[firstLetter][name]
    ) {
      res.status(404).json({ message: "Action word not found" });
      return;
    }

    const word = actionWords[firstLetter][name];
    res.status(200).json({ name, ...word });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getActionWordsByLetter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { letter } = req.params;
    const upperCaseLetter = letter.toUpperCase();
    const actionWords = await ActionWords.findOne().lean();

    if (!actionWords || !actionWords[upperCaseLetter]) {
      res
        .status(404)
        .json({ message: "No action words found for this letter" });
      return;
    }

    res.status(200).json(actionWords[upperCaseLetter]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
