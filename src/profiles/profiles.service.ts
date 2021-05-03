import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Profile, ProfileDocument } from './profiles.schema';

@Injectable()
export class ProfileService {

  constructor(
      @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
    ) 
  {}

  async get(email:string): Promise<Profile> 
  {
    const profile = await this.profileModel.findOne({email: email});
    return profile;
  }

  async create(createProfileDto: any): Promise<Profile> {
    const createdCat = new this.profileModel(createProfileDto);
    return createdCat.save();
  }


}
