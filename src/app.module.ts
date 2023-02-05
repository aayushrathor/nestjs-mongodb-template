import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BlogsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
