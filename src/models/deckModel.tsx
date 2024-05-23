import mongoose, { Schema } from 'mongoose';
import { IDeck } from '../interfaces/IDeck';

const deckSchema = new Schema<IDeck>({
  cards: { type: [String], required: true }
});

export default mongoose.model<IDeck>('Deck', deckSchema);