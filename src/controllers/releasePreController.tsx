import { Request, Response } from "express";
import PreconRelease from "../models/releasePreModel";
import Precon from "../models/preconModel";
import preconNameLookup from "../data/preconName";

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

const findPrecon = (obj: any, filename: string): any => {
    if (typeof obj !== "object" || obj === null) return null;
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === "object") {
        if (Array.isArray(obj[key])) {
          if (key === filename) {
            return obj[key];
          }
        } else {
          const result = findPrecon(obj[key], filename);
          if (result) return result;
        }
      }
    }
    return null;
  };
  
  export const getPrecon = async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const decodedName = decodeURIComponent(name);
      console.log(`Decoded name: ${decodedName}`);
      
      const preconFileName = preconNameLookup[decodedName];
      if (!preconFileName) {
        return res.status(404).json({ message: "Precon not found in the lookup table" });
      }
      console.log(`Mapped to filename: ${preconFileName}`);
  
      const allPrecons = await Precon.find();
      let foundPrecon = null;
      for (const precon of allPrecons) {
        const result = findPrecon(precon.toJSON(), preconFileName);
        if (result) {
          foundPrecon = result;
          break;
        }
      }
  
      if (!foundPrecon) {
        return res.status(404).json({ message: "Precon not found in the database" });
      }
  
      res.status(200).json(foundPrecon);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };