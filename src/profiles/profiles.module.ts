
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilesController } from './profiles.controller';
import { ExperiencesController } from './experience/experience.controller';
import { Profile, ProfileSchema } from './profiles.schema';
import { ProfileService } from './profiles.service';
import { ExperienceService } from './experience/experience.service';
import { Experience, ExperienceSchema } from './experience/experience.schema';
import { Education, EducationSchema } from './education/education.schema';
import { EducationService } from './education/education.service';

import { EducationsController } from './education/education.controller';
import { SkillsController } from './skill/skill.controller';
import { SkillService } from './skill/skill.service';
import { Skill, SkillSchema } from './skill/skill.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Profile.name, schema: ProfileSchema },
      { name: Experience.name, schema: ExperienceSchema },
      { name: Education.name, schema: EducationSchema },
      { name: Skill.name, schema: SkillSchema }
    ]),
  ],
  controllers: [ProfilesController,ExperiencesController,EducationsController,SkillsController],
  providers: [ProfileService,ExperienceService,EducationService,SkillService],
})
export class ProfilesModule {}
