import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject(PrismaService) private prisma:PrismaService){}

  async create(createUserDto: CreateUserDto) {
    try {
      const result = await this.prisma.user.create({
        data: { 
          ...createUserDto
        }
      });
      return result;
    } catch (error) {
      throw error
    };
  }

  async findAll() {
    try {
      const result = await this.prisma.user.findMany();
      return result;
    } catch (error) {
      throw error
    };
  }

  async findOne(id: number) {
    try {
      const result = await this.prisma.user.findFirst({
        where: {
          id: id
        }
      });
      return result;
    } catch (error) {
      throw error
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({
        where: { id }
      });
    } catch (error) {
      throw error;
    }
  }
}
