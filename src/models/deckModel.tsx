import mongoose, { Schema, Document } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

interface Card {
  qty: number;
  name: string;
  categories: string[];
  prices: any;
  set: string;
  superTypes: string[];
  subTypes: string[];
  saltScore: number;
  cmc: number;
}

export interface IDeck extends Document {
  deckName: string;
  color: string;
  cards: Card[];
}

const CardSchema: Schema = new Schema({
  qty: { type: Number, required: true },
  name: { type: String, required: true },
  categories: { type: [String], required: true },
  prices: { type: Object, required: true },
  set: { type: String, required: true },
  superTypes: { type: [String], required: true },
  subTypes: { type: [String], required: true },
  saltScore: { type: Number, required: true },
  cmc: { type: Number, required: true },
});

const DeckSchema: Schema = new Schema({
  deckName: { type: String, required: true },
  color: { type: String, required: true },
  cards: { type: [CardSchema], required: true },
});

DeckSchema.plugin(mongoosePaginate);

interface IDeckModel<T extends Document> extends mongoose.PaginateModel<T> {}

export default mongoose.model<IDeck, IDeckModel<IDeck>>(
  "Deck",
  DeckSchema,
  "decks"
);
