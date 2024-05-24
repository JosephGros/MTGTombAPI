import mongoose, { Schema } from 'mongoose';

const deckSchema = new Schema({
  name: { type: String, required: true },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

export default mongoose.model('Deck', deckSchema);