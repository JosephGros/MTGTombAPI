import { Request, Response } from "express";
import ThemeDetails, { IThemeDetails } from "../models/themesDetailsModel";

const getThemeDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.params;
    if (!name) {
      res.status(400).json({ message: "Name parameter is required" });
      return;
    }

    console.log(`Received request for theme: ${name}`);

    const themeDetails = await ThemeDetails.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } });

    if (!themeDetails) {
      res.status(404).json({ message: "Theme not found" });
      return;
    }

    console.log(`Found theme details: ${themeDetails}`);

    res.status(200).json(themeDetails);
  } catch (error) {
    console.error('Error fetching theme details:', error);
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
