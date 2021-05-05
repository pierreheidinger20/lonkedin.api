
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , ObjectId } from 'mongoose';

export type EducationDocument = Education & Document;

@Schema()
export class Education {

  _id:ObjectId;
  @Prop()
  email:string;
  @Prop()
  school: string;
  @Prop()
  degree: string;
  @Prop()
  credentialUrl: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);