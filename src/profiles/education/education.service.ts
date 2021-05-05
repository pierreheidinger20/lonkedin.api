import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Education,EducationDocument } from './education.schema';

@Injectable()
export class EducationService {

  constructor(
      @InjectModel(Education.name) private educationModel: Model<EducationDocument>,
    ) 
  {}

  async get(email:string): Promise<Education[]> 
  {
    const educations = await this.educationModel.find({email: email});
    return educations;
  }

  async create(educationDto: Education): Promise<Education> {
    const createdEducation = new this.educationModel(educationDto);
    return createdEducation.save();
  }

  async update(educationDto:Education): Promise<Education> {
    let updatedUpdated = await this.educationModel.findOneAndUpdate({_id: educationDto._id},educationDto);
    return updatedUpdated;
  }
  async delete(_id:string){
     await this.educationModel.deleteOne({_id: _id});;
  }
}
