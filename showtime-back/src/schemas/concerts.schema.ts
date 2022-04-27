import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop({ required: true })
  band_id: string;

  @Prop({ required: true })
  genre_id: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const ConcertsSchema = SchemaFactory.createForClass(Concerts);
