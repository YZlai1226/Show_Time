import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Users } from '../schemas/users.schema';
import { Concerts } from '../schemas/concerts.schema';

export type WishlistDocument = Wishlist & Document;

@Schema()
export class Wishlist {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
  user_id: Users;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Concerts',
  })
  concert_id: Concerts;

  @Prop({ required: true, default: Date.now })
  created_at: Date;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
