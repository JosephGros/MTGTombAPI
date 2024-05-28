import { Request, Response } from "express";
import Theme from "../models/themeModel";

export const getAllThemes = async (req: Request, res: Response): Promise<void> => {
  try {
    const themes = await Theme.find();

    const groupedThemes: { [key: string]: any[] } = {};

    themes.forEach(theme => {

      const baseThemeName = theme.themeName.split('_').slice(0, -1).join('_');

      if (!groupedThemes[baseThemeName]) {
        groupedThemes[baseThemeName] = [];
      }

      groupedThemes[baseThemeName] = groupedThemes[baseThemeName].concat(theme.cards.slice(0, 3));
    });

    const themeSummaries = Object.keys(groupedThemes).map(baseThemeName => ({
      themeName: baseThemeName,
      firstThreeCards: groupedThemes[baseThemeName].slice(0, 3)
    }));

    res.status(200).json(themeSummaries);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCardsByTheme = async (req: Request<{ name: string }>, res: Response): Promise<void> => {
  try {
    const { name } = req.params;
    const regex = new RegExp(`^${name}_\\d+$`, 'i');
    const themeDocs = await Theme.find({ themeName: regex });

    if (!themeDocs || themeDocs.length === 0) {
      res.status(404).json({ message: "Theme not found" });
      return;
    }

    let allCards: any[] = [];
    themeDocs.forEach(themeDoc => {
      allCards = allCards.concat(themeDoc.cards);
    });

    res.status(200).json(allCards);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};