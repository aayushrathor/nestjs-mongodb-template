import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blogs.schema';
import { CreateBlogDto } from './dto/createBlog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name) private readonly model: Model<BlogDocument>,
  ) {}

  async getBlogs(): Promise<Blog[]> {
    return await this.model.find().exec();
  }

  async getBlogById(id: string): Promise<Blog> {
    return await this.model.findById(id).exec();
  }

  async createBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
    return await new this.model({
      ...createBlogDto,
      createdOn: new Date(),
    }).save();
  }
}
