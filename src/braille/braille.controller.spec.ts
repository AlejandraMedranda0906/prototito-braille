import { Test, TestingModule } from '@nestjs/testing';
import { BrailleController } from './braille.controller';
import { BrailleService } from './braille.service';

describe('BrailleController', () => {
  let controller: BrailleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrailleController],
      providers: [BrailleService],
    }).compile();

    controller = module.get<BrailleController>(BrailleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
