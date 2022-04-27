import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Bands } from '../schemas/bands.schema';
import * as mongoose from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: 'false' })
  account_active: boolean;

  @Prop({ required: true, default: 'false' })
  admin: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bands' }] })
  bands: Bands[];

  @Prop({ required: true, default: Date.now })
  created_at: Date;

  @Prop({ required: true, default: Date.now })
  updated_at: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
