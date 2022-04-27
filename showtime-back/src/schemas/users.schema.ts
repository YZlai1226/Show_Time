import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  account_active: boolean;

  @Prop({ required: true })
  admin: boolean;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
