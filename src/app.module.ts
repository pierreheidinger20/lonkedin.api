import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://teste:teste@profiles.xbqlg.mongodb.net/lonkedin?retryWrites=true&w=majority'),
    ProfilesModule,
    PassportModule
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
  exports:[
    
  ]
})
export class AppModule {}
