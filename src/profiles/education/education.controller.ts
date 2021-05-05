import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { EducationService } from './education.service'

@Controller('educations')
export class EducationsController {

  constructor(private _educationService:EducationService)
  {}

  // @UseGuards(AuthGuard)
  @Get(':email')
  async getEducations(@Param() params) {
    let education = await this._educationService.get(params.email);
    return education;
  }
  @UseGuards(AuthGuard)
  @Post()
  async saveEducation(@Body() createExperience:any) {
    let education = await this._educationService.create(createExperience);
    return education;
  }
  @UseGuards(AuthGuard)
  @Put()
  async updateEducation(@Body() updateExperience:any) {
    let education = await this._educationService.update(updateExperience);
    return education;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteEducation(@Param() params) { 
     await this._educationService.delete(params.id);  
  }
}
