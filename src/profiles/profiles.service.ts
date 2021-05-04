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

  async create(profileDto: Profile): Promise<Profile> {
    const createdProfile = new this.profileModel(profileDto);
    return createdProfile.save();
  }

  async update(profileDto:Profile): Promise<Profile> {
    let profileUpdated = await this.profileModel.updateOne({email: profileDto.email},profileDto);
    return profileDto;
  }

}
