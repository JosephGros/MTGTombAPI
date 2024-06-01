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
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const themes: IThemeDetails[] = await ThemeDetails.find()
      .skip(skip)
      .limit(limit);

    const total = await ThemeDetails.countDocuments();

    res.status(200).json({
      total,
      page,
      pageSize: themes.length,
      totalPages: Math.ceil(total / limit),
      themes,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { getThemeDetails, getAllThemes };
