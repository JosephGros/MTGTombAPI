import { Request, Response } from "express";
import TopComTheme from "../models/topComThemeModel";

export const getAllThemes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const themes = await TopComTheme.find();
    res.status(200).json(themes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getThemeByName = async (
  req: Request<{ name: string }>,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.params;
    const themeDoc = await TopComTheme.findOne();

    if (!themeDoc) {
      res.status(404).json({ message: "Themes not found" });
      return;
    }

    const themes = themeDoc.toObject().themes;
    let foundTheme = null;

    for (const theme of themes) {
      if (theme[name]) {
        foundTheme = { [name]: theme[name] };
        break;
      }
    }

    if (!foundTheme) {
      res.status(404).json({ message: "Theme not found" });
      return;
    }

    res.status(200).json(foundTheme);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
