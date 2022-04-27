import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenresDocument = Genres & Document;

@Schema()
export class Genres {
  @Prop({ required: true })
  name: string;
}

export const GenresSchema = SchemaFactory.createForClass(Genres);
