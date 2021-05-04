
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Experience } from './experience/experience.schema';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {

  @Prop()
  city: string;
  @Prop()
  firstName!:string;
  @Prop()
  lastName!:string;
  @Prop()
  email!:string;
  @Prop()
  address!:string;
  @Prop()
  phoneNumber!:string;
  @Prop()
  company!:string;
  @Prop()
  presentation!:string;

}

export const ProfileSchema = SchemaFactory.createForClass(Profile);