// Dependencies
import mongoose from "mongoose";

// Mongoose Schemas
const Schema = mongoose.Schema;

// Service Collection
const serviceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    default: null
  },
  salary: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now()
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model('service', serviceSchema);
