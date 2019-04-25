import mongoose from "mongoose";

const GlobalSchema = new mongoose.Schema(
  {
    book: String,
    author: String,
    name: String,
    number: Number,
    date: {
      type: Date,
      default: Date.now
    },
    type: { type: String, default: "daily" },
    status: { type: Boolean, default: true }
  },
  { collection: "Global", versionKey: false, strict: false }
);

export default mongoose.model("Global", GlobalSchema);
