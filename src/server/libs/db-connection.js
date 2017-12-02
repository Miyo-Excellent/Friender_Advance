// Dependencies
import mongoose from 'mongoose';

let db;

export function Connection() {
  if (!db) {
    db = mongoose.connect('mongodb://localhost/friender');
  }
  return db;
}
