import mongoose, { Schema } from "mongoose";
import { IThemeBatch } from "../interfaces/ITheme";
import { ICard } from "../interfaces/ICard";

const cardSchema = new Schema<ICard>({
  name: { type: String, required: true },
  id: { type: String, required: true },
  rarity: { type: String, required: true },
  image_uris: {
    small: { type: String, required: true },
    normal: { type: String, required: true },
    large: { type: String, required: true },
    png: { type: String, required: true },
    art_crop: { type: String, required: true },
    border_crop: { type: String, required: true },
  },
  cmc: { type: Number, required: true },
  type_line: { type: String, required: true },
  oracle_text: { type: String, required: true },
  color_identity: { type: [String], required: true },
  keywords: { type: [String], required: true },
  flavor_text: { type: String },
});

const themeBatchSchema = new Schema<IThemeBatch>({
  id: { type: String, required: true },
  themeName: { type: String, required: true },
  cards: { type: [cardSchema], required: true },
  v: { type: Number, required: true },
});

export default mongoose.model<IThemeBatch>(
  "ThemeBatch",
  themeBatchSchema,
  "themes"
);
