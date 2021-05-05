import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProfileService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {

  constructor(private _profilesService:ProfileService)
  {}
  // @UseGuards(AuthGuard)
  @Get(':email')
  async getProfile(@Param() params) {
    let profile = await this._profilesService.get(params.email);
    return profile;
  }
  @UseGuards(AuthGuard)
  @Post()
  async saveProfile(@Body() createProfile:any) {
    let profile = await this._profilesService.create(createProfile);
    return profile;
  }
  @UseGuards(AuthGuard)
  @Put()
  async updateProfile(@Body() createProfile:any) {
    let profile = await this._profilesService.update(createProfile);
    return profile;
  }

}
