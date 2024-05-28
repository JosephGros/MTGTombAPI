import mongoose, { Schema, Document } from "mongoose";

export interface ITheme {
  [key: string]: string[];
}

export interface ITopComTheme extends Document {
  themes: ITheme[];
}

const ThemeSchema: Schema = new Schema({}, { strict: false, _id: false });

const TopComThemeSchema: Schema = new Schema({
  themes: { type: [ThemeSchema], required: true },
});

export default mongoose.model<ITopComTheme>(
  "TopComTheme",
  TopComThemeSchema,
  "commandersInThemes"
);