import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Experience , ExperienceDocument } from './experience.schema';

@Injectable()
export class ExperienceService {

  constructor(
      @InjectModel(Experience.name) private experienceModel: Model<ExperienceDocument>,
    ) 
  {}

  async get(email:string): Promise<Experience[]> 
  {
    const profile = await this.experienceModel.find({email: email});
    return profile;
  }

  async create(experienceDto: Experience): Promise<Experience> {
    const createdProfile = new this.experienceModel(experienceDto);
    return createdProfile.save();
  }

  async update(experienceDto:Experience): Promise<Experience> {
    console.log(experienceDto._id);
    let profileUpdated = await this.experienceModel.findOneAndUpdate({_id: experienceDto._id},experienceDto);
    return experienceDto;
  }
  async delete(experienceDto:Experience): Promise<Experience> {
    let profileDeleted = await this.experienceModel.deleteOne({_id: experienceDto._id});
    return experienceDto;
  }
}
