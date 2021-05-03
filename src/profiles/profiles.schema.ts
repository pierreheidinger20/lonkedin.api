
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop()
  email: string;
  @Prop()
  city: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);