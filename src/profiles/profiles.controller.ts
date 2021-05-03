import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ProfileService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {

  constructor(private _profilesService:ProfileService)
  {}

  @Get(':email')
  async getProfile(@Param() params) {
    let profile = await this._profilesService.get(params.email);
    return profile;
  }
  @Post()
  async saveProfile(@Body() createProfile:any) {
    let profile = await this._profilesService.create(createProfile);
    return profile;
  }
}
