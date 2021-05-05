
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , ObjectId } from 'mongoose';
import { Nivel } from './nivel.enum'

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {

  _id:ObjectId;
  @Prop()
  email:string;
  @Prop()
  name:string;
  @Prop()
  nivel: Nivel
}

export const SkillSchema = SchemaFactory.createForClass(Skill);