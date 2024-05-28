import { Request, Response } from "express";
import TopCommander from "../models/topComModel";

const seeAllTopComs = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  const allBatches = await TopCommander.find();
  const allCommanders = allBatches.flatMap(batch => batch.commanders);
  allCommanders.sort((a, b) => a.rank - b.rank);
  return allCommanders.slice(skip, skip + limit);
};

const seeOneTopComByName = async (name: string) => {
  const allBatches = await TopCommander.find();
  for (const batch of allBatches) {
    for (const commander of batch.commanders) {
      if (commander.name === name) {
        return commander;
      }
    }
  }
  return null;
};

export const getAllTopComs = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const commanders = await seeAllTopComs(page, limit);
    res.json(commanders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getTopComByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const commander = await seeOneTopComByName(name);
    if (!commander) {
      return res.status(404).json({ message: "Commander not found" });
    }
    res.status(200).json(commander);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};