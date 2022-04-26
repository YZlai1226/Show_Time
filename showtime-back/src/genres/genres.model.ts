import * as mongoose from 'mongoose';

export const GenresSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export interface Genres extends mongoose.Document {
  id: number;
  name: string;
  image: string;
}
