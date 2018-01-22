// Dependencies
import mongoose from "mongoose";

// Mongoose Schemas
const Schema = mongoose.Schema;

// Ofert Collection
const OfertSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  date_top: {
    type: Date,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Company"
  }
});

export default mongoose.model('Oferts', OfertSchema);
