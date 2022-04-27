import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BandsDocument = Bands & Document;

@Schema()
export class Bands {
  @Prop({ required: true })
  name: string;
}

export const BandsSchema = SchemaFactory.createForClass(Bands);
