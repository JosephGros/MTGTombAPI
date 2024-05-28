import mongoose, { Schema, Document } from "mongoose";

interface Deck {
  title: string;
  decks: string[];
}

export interface IYear {
  [key: string]: Deck;
}

export interface IPreconRelease extends Document {
  years: IYear[];
}

const DeckSchema: Schema = new Schema({
  title: { type: String, required: true },
  decks: { type: [String], required: true },
});

const PreconReleaseSchema: Schema = new Schema({
  years: { type: [Schema.Types.Mixed], required: true },
});

export default mongoose.model<IPreconRelease>(
  "PreconRelease",
  PreconReleaseSchema,
  "preconrelease"
);
