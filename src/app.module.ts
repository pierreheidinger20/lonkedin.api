import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesController } from './profiles/profiles.controller';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://teste:teste@profiles.xbqlg.mongodb.net/lonkedin?retryWrites=true&w=majority'),
    ProfilesModule
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
