import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Photo, PhotoSchema } from '../../schema/photo.schema';
import { User } from '@/user/schema/user.schema';
import { Attraction } from '@/attraction/schema/attraction.schema';
import { Restaurant } from '@/restaurant/schema/restaurant.schema';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

export type ReviewDocument = mongoose.HydratedDocument<Review>;
@ObjectType()
@Schema({ timestamps: true })
export class Review {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field()
  @Prop({ required: true })
  rating: number;

  @Field(() => [Photo])
  @Prop({ type: [PhotoSchema], default: [] })
  photos: Photo[];

  @Field(() => ID)
  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'User' })
  userId: User;

  @Field(() => ID)
  @Prop({ required: true, type: mongoose.Types.ObjectId, refPath: 'placeType' })
  placeId: Attraction | Restaurant;

  @Field()
  @Prop({ required: true, enum: ['Attraction', 'Restaurant'] })
  placeType: 'Attraction' | 'Restaurant';

  @Field(() => GraphQLISODateTime)
  createdAt: string;

  @Field(() => GraphQLISODateTime)
  updatedAt: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

ReviewSchema.index({ placeType: 1, placeId: 1 });
