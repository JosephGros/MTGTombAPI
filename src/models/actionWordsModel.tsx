import mongoose, { Schema, Document } from "mongoose";

interface ActionWord {
  Rules: string;
  Explanation: string;
}

interface IActionWords {
  [key: string]: {
    [key: string]: ActionWord;
  };
}

const actionWordSchema: Schema = new Schema({
  Rules: String,
  Explanation: String,
});

const ActionWordsSchema: Schema = new Schema({
  A: { type: Map, of: actionWordSchema },
  C: { type: Map, of: actionWordSchema },
  D: { type: Map, of: actionWordSchema },
  E: { type: Map, of: actionWordSchema },
  F: { type: Map, of: actionWordSchema },
  R: { type: Map, of: actionWordSchema },
  S: { type: Map, of: actionWordSchema },
  T: { type: Map, of: actionWordSchema },
  U: { type: Map, of: actionWordSchema },
  V: { type: Map, of: actionWordSchema },
  Z: { type: Map, of: actionWordSchema },
});

export default mongoose.model<Document & IActionWords>(
  "ActionWords",
  ActionWordsSchema
);
