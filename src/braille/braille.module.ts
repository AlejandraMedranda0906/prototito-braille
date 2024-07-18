import { Module } from '@nestjs/common';
import { BrailleService } from './braille.service';
import { BrailleController } from './braille.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BrailleController],
  providers: [BrailleService],
  
})
export class BrailleModule {}
