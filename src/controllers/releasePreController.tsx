import { Request, Response } from "express";
import PreconRelease from "../models/releasePreModel";

export const getAllPrecons = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const preconRelease = await PreconRelease.findOne();

    if (!preconRelease) {
      res.status(404).json({ message: "Preconstructed releases not found" });
      return;
    }

    const preconNames: {
      year: string;
      sets: { [key: string]: { title: string; decks: string[] } };
    }[] = [];

    preconRelease.years.forEach((yearObj: any) => {
      Object.keys(yearObj).forEach((year) => {
        const sets = yearObj[year];
        preconNames.push({ year, sets });
      });
    });

    res.status(200).json(preconNames);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
