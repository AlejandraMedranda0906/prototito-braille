import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrailleModule } from './braille/braille.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BrailleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
