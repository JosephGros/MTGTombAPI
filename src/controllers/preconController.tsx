import { Request, Response } from "express";
import Precon from "../models/preconModel";

const findDeckInNestedObject = (obj: any, name: string): any => {
  if (typeof obj !== "object" || obj === null) return null;
  if (Array.isArray(obj)) {
    for (const item of obj) {
      const result = findDeckInNestedObject(item, name);
      if (result) return result;
    }
  } else {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const result = findDeckInNestedObject(obj[key], name);
        if (result) return result;
      } else if (key === "name" && obj[key] === name) {
        return obj;
      }
    }
  }
  return null;
};

const seeAllPrecons = async () => {
  const precons = await Precon.find();
  return precons;
};

const seeOnePreconByName = async (name: string) => {
  const allPrecons = await Precon.find();
  for (const precon of allPrecons) {
    const found = findDeckInNestedObject(precon.toJSON(), name);
    if (found) return found;
  }
  return null;
};

export const getAllPrecons = async (req: Request, res: Response) => {
  try {
    const precons = await seeAllPrecons();
    res.json(precons);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getPrecon = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    console.log(`Request to find precon with name: ${name}`);
    const precon = await seeOnePreconByName(name);
    if (!precon) {
      return res.status(404).json({ message: "Precon not found" });
    }
    res.status(200).json(precon);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
