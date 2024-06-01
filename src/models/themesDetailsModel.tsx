import { Schema, model, Document } from "mongoose";

interface IThemeDetails extends Document {
  name: string;
  criteria: {
    oracle_text: string[];
  };
  explanation: string;
  count: number;
  cardCount: number;
  commanderCards: string[];
}

const themeDetailsSchema = new Schema<IThemeDetails>({
  name: { type: String, required: true },
  criteria: {
    oracle_text: [String],
  },
  explanation: { type: String, required: true},
  count: { type: Number, required: true },
  cardCount: { type: Number, required: true },
  commanderCards: [String],
});

const ThemeDetails = model<IThemeDetails>("ThemeDetails", themeDetailsSchema);

export default ThemeDetails;
export { IThemeDetails };
