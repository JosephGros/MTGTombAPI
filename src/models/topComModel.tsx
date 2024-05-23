import mongoose, { Schema, Document } from 'mongoose';
import { ICommanderBatch } from '../interfaces/ITopCom';

const CommanderSchema: Schema = new Schema({
  batchName: { type: String, required: true },
  commanders: [
    {
      name: { type: String, required: true },
      num_decks: { type: Number, required: true },
      rank: { type: Number, required: true },
      themes: [{ type: String, required: true }],
    },
  ],
});

export default mongoose.model<ICommanderBatch & Document>('CommanderBatch', CommanderSchema, 'topcommanders');
