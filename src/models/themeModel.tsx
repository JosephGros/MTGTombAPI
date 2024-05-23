import mongoose, { Schema } from 'mongoose';
import { ITheme, IThemeBatch } from '../interfaces/ITheme';

const themeSchema = new Schema<ITheme>({
  themeName: { type: String, required: true },
  cards: { type: [String], required: true }
});

const themeBatchSchema = new Schema<IThemeBatch>({
  themeName: { type: String, required: true },
  themes: { type: [themeSchema], required: true }
});

export default mongoose.model<IThemeBatch>('ThemeBatch', themeBatchSchema, "themes");
