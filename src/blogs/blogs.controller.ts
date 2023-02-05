import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/createBlog.dto';
import { UpdateBlogDto } from './dto/updateBlog.dto';

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
  @UsePipes(ValidationPipe)
  async createBlog(@Body() createBlogDto: CreateBlogDto) {
    console.log(createBlogDto);
    return await this.service.createBlog(createBlogDto);
  }

  // @Put(':id')
  // async updateBlog(
  //   @Param('id') id: string,
  //   @Body updateBlogDto: UpdateBlogDto,
  // ) {
  //   return await this.service.updateBlog(id, updateBlogDto);
  // }

  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    return await this.service.deleteBlog(id);
  }
}
