import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ExperienceService } from './experience.service';

@Controller('experiences')
export class ExperiencesController {

  constructor(private _experienceService:ExperienceService)
  {}

  @UseGuards(AuthGuard)
  @Get(':email')
  async getExperiences(@Param() params) {
    let profile = await this._experienceService.get(params.email);
    return profile;
  }
  @UseGuards(AuthGuard)
  @Post()
  async saveExperience(@Body() createExperience:any) {
    let profile = await this._experienceService.create(createExperience);
    return profile;
  }
  @UseGuards(AuthGuard)
  @Put()
  async updateExperience(@Body() updateExperience:any) {
    let profile = await this._experienceService.update(updateExperience);
    return profile;
  }

  @UseGuards(AuthGuard)
  @Delete()
  async deleteExperience(@Body() updateExperience:any) {
    let profile = await this._experienceService.delete(updateExperience);
    return profile;
  }
}
