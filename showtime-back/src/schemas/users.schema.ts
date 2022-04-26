import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  avatar: string;

  @Prop()
  password: string;

  @Prop()
  account_active: boolean;

  @Prop()
  admin: boolean;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
