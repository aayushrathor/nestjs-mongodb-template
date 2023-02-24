import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): {} {
    return {
      name: 'NestJs MongoDB Blogs Template',
      version: '0.0.1',
      message: 'Welcome to Blogs api!',
      author: 'aayushrathor',
    };
  }
}
