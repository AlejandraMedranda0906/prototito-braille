import { PartialType } from '@nestjs/swagger';
import { CreateBrailleDto } from './create-braille.dto';

export class UpdateBrailleDto extends PartialType(CreateBrailleDto) {
  register?: {
    id: number;
    usageTime: Date;
  }[];
}
