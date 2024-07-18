import { Test, TestingModule } from '@nestjs/testing';
import { BrailleService } from './braille.service';

describe('BrailleService', () => {
  let service: BrailleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrailleService],
    }).compile();

    service = module.get<BrailleService>(BrailleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
