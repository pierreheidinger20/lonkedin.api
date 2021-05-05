import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { SkillService } from './skill.service';

@Controller('skills')
export class SkillsController {

  constructor(private _skillService:SkillService)
  {}

  @UseGuards(AuthGuard)
  @Get(':email')
  async getSkills(@Param() params) {
    let skill = await this._skillService.get(params.email);
    return skill;
  }
  @UseGuards(AuthGuard)
  @Post()
  async saveSkill(@Body() createSkill:any) {
    let skill = await this._skillService.create(createSkill);
    return skill;
  }
  @UseGuards(AuthGuard)
  @Put()
  async updateSkill(@Body() updateSkill:any) {
    let skill = await this._skillService.update(updateSkill);
    return skill;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteSkill(@Param() params) { 
     await this._skillService.delete(params.id);  
  }
}
