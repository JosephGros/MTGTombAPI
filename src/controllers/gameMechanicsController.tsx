import { Request, Response } from "express";
import GameMechanic from "../models/gameMechanicsModel";

export const getAllGameMechanics = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const gameMechanics = await GameMechanic.find().lean();
    if (!gameMechanics || gameMechanics.length === 0) {
      res.status(404).json({ message: "Game mechanics not found" });
      return;
    }
    res.status(200).json(gameMechanics);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getGameMechanicByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.params;
    const gameMechanic = await GameMechanic.findOne({ keyword: name }).lean();

    if (!gameMechanic) {
      res.status(404).json({ message: "Game mechanic not found" });
      return;
    }

    res.status(200).json(gameMechanic);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getGameMechanicsByLetter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { letter } = req.params;
    const regex = new RegExp(`^${letter}`, "i");
    const gameMechanics = await GameMechanic.find({ keyword: regex }).lean();

    if (!gameMechanics || gameMechanics.length === 0) {
      res
        .status(404)
        .json({ message: "No game mechanics found for this letter" });
      return;
    }

    res.status(200).json(gameMechanics);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
