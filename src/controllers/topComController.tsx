import { Request, Response } from "express";
import TopCommander from "../models/topComModel";

const seeAllTopComs = async () => {
  const precons = await TopCommander.find();
  return precons;
};

const seeOneTopComByName = async (name: string) => {
  const allTopComs = await TopCommander.find();
  for (const batch of allTopComs) {
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
    const precons = await seeAllTopComs();
    res.json(precons);
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
