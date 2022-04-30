import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Users } from '../schemas/users.schema';
import { Concerts } from '../schemas/concerts.schema';
import * as mongoose from 'mongoose';

export type BookingsDocument = Bookings & Document;

@Schema()
export class Bookings {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
  user_id: Users;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Concerts' })
  concert_id: Concerts;

  @Prop({ required: true, default: Date.now })
  created_at: Date;

  @Prop({ required: true, default: Date.now })
  updated_at: Date;
}

export const BookingsSchema = SchemaFactory.createForClass(Bookings);
