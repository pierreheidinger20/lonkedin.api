
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , ObjectId } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {

  _id:ObjectId;
  @Prop()
  email:string;
  @Prop()
  title: string;
  @Prop()
  description!:string;
  @Prop()
  company!:string;
  @Prop()
  startDate!:Date;
  @Prop()
  endDate!:Date;

}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);