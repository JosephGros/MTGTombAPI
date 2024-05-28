import mongoose, { Schema } from "mongoose";

const deckSchema = new Schema({
  name: { type: String, required: true },
  cards: [{ type: String, ref: "Card" }],
  commander: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Deck", deckSchema);
