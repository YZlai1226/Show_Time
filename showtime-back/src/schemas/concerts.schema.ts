import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Bands } from '../schemas/bands.schema';
import { Genres } from '../schemas/genres.schema';

export type ConcertsDocument = Concerts & Document;

@Schema()
export class Concerts {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Bands' })
  bands_id: Bands;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Genres' })
  genre_id: Genres;

  @Prop({ required: true, default: Date.now })
  created_at: Date;

  @Prop({ required: true, default: Date.now })
  updated_at: Date;
}

export const ConcertsSchema = SchemaFactory.createForClass(Concerts);
