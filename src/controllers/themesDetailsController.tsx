import { Request, Response } from "express";
import ThemeDetails, { IThemeDetails } from "../models/themesDetailsModel";

const getThemeDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    if (!name) {
      res.status(400).json({ message: "Name query parameter is required" });
      return;
    }

    const themeDetails = await ThemeDetails.findOne({ name: name.toString() });

    if (!themeDetails) {
      res.status(404).json({ message: "Theme not found" });
      return;
    }

    res.status(200).json(themeDetails);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllThemes = async (req: Request, res: Response): Promise<void> => {
  try {
    const themes: IThemeDetails[] = await ThemeDetails.find();
    res.status(200).json(themes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { getThemeDetails, getAllThemes };
