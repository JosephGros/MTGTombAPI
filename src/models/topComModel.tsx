import mongoose, { Schema, Document, PaginateModel } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { ICommanderBatch } from "../interfaces/ITopCom";

const TopCommanderSchema: Schema = new Schema({
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

TopCommanderSchema.plugin(mongoosePaginate);

interface ICommanderBatchModel
  extends PaginateModel<ICommanderBatch & Document> {}

const TopCommander = mongoose.model<
  ICommanderBatch & Document,
  ICommanderBatchModel
>("CommanderBatch", TopCommanderSchema, "topcommanders");

export default TopCommander;
