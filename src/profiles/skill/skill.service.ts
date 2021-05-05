import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Skill, SkillDocument } from './skill.schema';

@Injectable()
export class SkillService {

  constructor(
      @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
    ) 
  {}

  async get(email:string): Promise<Skill[]> 
  {
    const educations = await this.skillModel.find({email: email});
    return educations;
  }

  async create(skillDto: Skill): Promise<Skill> {
    const createdSkill = new this.skillModel(skillDto);
    return createdSkill.save();
  }

  async update(skillDto:Skill): Promise<Skill> {
    let updatedSkill = await this.skillModel.findOneAndUpdate({_id: skillDto._id},skillDto);
    return updatedSkill;
  }
  async delete(_id:string){
     await this.skillModel.deleteOne({_id: _id});;
  }
}
