import { Request, Response } from "express";
import PreconRelease from "../models/releasePreModel";

// Recursive function to find the deck by name in a nested object structure
const findDeckInNestedObject = (obj: any, name: string): any => {
  if (typeof obj !== "object" || obj === null) return null;

  for (const key in obj) {
    // Check if the key includes the name (ignoring case and non-alphanumeric characters)
    if (key.toLowerCase().includes(name.toLowerCase().replace(/[^a-z0-9]/gi, ''))) {
      return { name: key, precon: obj[key] };
    } else if (typeof obj[key] === "object") {
      const result = findDeckInNestedObject(obj[key], name);
      if (result) return result;
    }
  }
  return null;
};

const seeAllPrecons = async () => {
  const preconRelease = await PreconRelease.findOne();
  return preconRelease;
};

const seeOnePreconByName = async (name: string) => {
  const preconRelease = await seeAllPrecons();
  if (!preconRelease) return null;

  for (const year of preconRelease.years) {
    for (const yearKey in year) {
      const sets:any = year[yearKey];
      for (const setKey in sets) {
        const decks = sets[setKey].decks;
        if (decks) {
          const found = findDeckInNestedObject(decks, name);
          if (found) return found;
        }
      }
    }
  }
  return null;
};

export const getAllPrecons = async (req: Request, res: Response) => {
  try {
    const preconRelease = await seeAllPrecons();
    if (!preconRelease) {
      res.status(404).json({ message: "Preconstructed releases not found" });
      return;
    }

    const preconNames: { year: string; sets: { [key: string]: { title: string; decks: string[] } } }[] = [];

    preconRelease.years.forEach((yearObj: any) => {
      Object.keys(yearObj).forEach((year) => {
        const sets = yearObj[year];
        const formattedSets: { [key: string]: { title: string; decks: string[] } } = {};

        Object.keys(sets).forEach((setKey) => {
          const set = sets[setKey];
          formattedSets[setKey] = {
            title: set.title,
            decks: Object.keys(set.decks)
          };
        });

        preconNames.push({ year, sets: formattedSets });
      });
    });

    res.status(200).json(preconNames);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getPrecon = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const decodedName = decodeURIComponent(name);
    const precon = await seeOnePreconByName(decodedName);
    if (!precon) {
      return res.status(404).json({ message: "Precon not found" });
    }
    res.status(200).json({ name: decodedName, precon: precon.precon });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
