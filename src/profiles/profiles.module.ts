
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilesController } from './profiles.controller';
import { ExperiencesController } from './experience/experience.controller';
import { Profile, ProfileSchema } from './profiles.schema';
import { ProfileService } from './profiles.service';
import { ExperienceService } from './experience/experience.service';
import { Experience, ExperienceSchema } from './experience/experience.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Profile.name, schema: ProfileSchema },
      { name: Experience.name, schema: ExperienceSchema }
    ]),
  ],
  controllers: [ProfilesController,ExperiencesController],
  providers: [ProfileService,ExperienceService],
})
export class ProfilesModule {}
