import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@Inject(PrismaService) private prisma:PrismaService){}

  async create(createPostDto: CreatePostDto) {
    try {
      const result = await this.prisma.user.create({
        data: {
          ...createPostDto
        }
      });
      return result;
    } catch (error) {
      throw error
    };
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
