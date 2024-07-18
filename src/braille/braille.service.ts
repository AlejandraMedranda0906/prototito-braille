import { Injectable } from '@nestjs/common';
import { CreateBrailleDto } from './dto/create-braille.dto';
import { UpdateBrailleDto } from './dto/update-braille.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrailleService {
  constructor(private prisma: PrismaService) {}

  async create(createBrailleDto: CreateBrailleDto) {
    const { firstName, lastName, age, register } = createBrailleDto;
    const newUser = await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        age,
        registers: {
          create: register,
        },
      },
    });
    return newUser;
  }

  async findAllAlive() {
    return this.prisma.user.findMany({
      where: {
        age: {
          gt: 18,
        },
      },
      include: {
        registers: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        registers: true,
      },
    });
  }

  async update(id: number, updateBrailleDto: UpdateBrailleDto) {
    const { firstName, lastName, age, register } = updateBrailleDto;
    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        age,
        registers: {
          update: register.map((reg) => ({
            where: { id: reg.id },
            data: { usageTime: reg.usageTime },
          })),
        },
      },
    });
    return updatedUser;
  }

  async remove(id: number) {
    await this.prisma.register.deleteMany({
      where: {
        userId: id,
      },
    });
    const deletedUser = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return deletedUser;
  }
}
