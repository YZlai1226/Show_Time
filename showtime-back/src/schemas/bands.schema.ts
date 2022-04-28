import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BandsDocument = Bands & Document;

@Schema()
export class Bands {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: Date.now })
  created_at: Date;

  @Prop({ required: true, default: Date.now })
  updated_at: Date;
}

export const BandsSchema = SchemaFactory.createForClass(Bands);
