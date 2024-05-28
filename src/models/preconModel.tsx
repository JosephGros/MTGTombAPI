import mongoose, { Schema, Document } from "mongoose";

interface ICard {
  qty: number;
  name: string;
  categories: string[];
  prices: object;
  set: string;
  superTypes: string[];
  subTypes: string[];
  saltScore: number | null;
  cmc: number;
}

interface IPrecon extends Document {
  year: number;
  color: string;
  deckName: string;
  cards: ICard[];
}

const CardSchema: Schema = new Schema({
  qty: { type: Number, required: true },
  name: { type: String, required: true },
  categories: { type: [String], required: true },
  prices: { type: Object, required: true },
  set: { type: String, required: true },
  superTypes: { type: [String], required: true },
  subTypes: { type: [String], required: true },
  saltScore: { type: Number, default: null },
  cmc: { type: Number, required: true },
});

const PreconSchema: Schema = new Schema({
  year: { type: Number, required: true },
  color: { type: String, required: true },
  deckName: { type: String, required: true },
  cards: { type: [CardSchema], required: true },
});

export default mongoose.model<IPrecon>(
  "Precon",
  PreconSchema,
  "commanderprecons"
);
