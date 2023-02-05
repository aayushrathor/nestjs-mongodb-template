import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/createBlog.dto';

@Controller('blog')
export class BlogsController {
  constructor(private readonly service: BlogsService) {}

  @Get()
  async getBlogs() {
    return await this.service.getBlogs();
  }

  @Get(':id')
  async getBlogById(@Param('id') id: string) {
    return await this.service.getBlogById(id);
  }

  @Post()
  async createBlog(@Body() createBlogDto: CreateBlogDto) {
    return await this.service.createBlog(createBlogDto);
  }
}
