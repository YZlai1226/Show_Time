import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenresDocument = Genres & Document;

@Schema()
export class Genres {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: Date.now })
  created_at: Date;

  @Prop({ required: true, default: Date.now })
  updated_at: Date;
}

export const GenresSchema = SchemaFactory.createForClass(Genres);
