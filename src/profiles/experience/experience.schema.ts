
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {

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