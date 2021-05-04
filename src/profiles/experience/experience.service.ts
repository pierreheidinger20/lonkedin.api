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
    let profileUpdated = await this.experienceModel.updateOne({email: experienceDto.email},experienceDto);
    return experienceDto;
  }

}
