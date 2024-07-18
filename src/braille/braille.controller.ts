import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrailleService } from './braille.service';
import { CreateBrailleDto } from './dto/create-braille.dto';
import { UpdateBrailleDto } from './dto/update-braille.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('braille')
@ApiTags('braille')
export class BrailleController {
  constructor(private readonly brailleService: BrailleService) {}

  @Post()
  create(@Body() createBrailleDto: CreateBrailleDto) {
    return this.brailleService.create(createBrailleDto);
  }

  @Get()
  findAll() {
    return this.brailleService.findAllAlive();
  }



  @Get(':id') //localhost:3000/braille/1
  findOne(@Param('id') id: string) {
    return this.brailleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrailleDto: UpdateBrailleDto) {
    return this.brailleService.update(+id, updateBrailleDto);
  }

  @Delete(':id') 
  remove(@Param('id') id: string) {
    return this.brailleService.remove(+id);
  }
}
