import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  serialNum: { type: Number, required: true },
  site: { type: String, required: true },
  pr: { type: Number, required: true },
  da: { type: Number, required: true },
  pa: { type: Number, required: true },
  ss: { type: Number, required: true },
});

const Table = mongoose.model("table", tableSchema);

export default Table;
