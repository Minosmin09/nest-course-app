import { Test, TestingModule } from '@nestjs/testing';
import { UntilityService } from './untility.service';

describe('UntilityService', () => {
  let service: UntilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UntilityService],
    }).compile();

    service = module.get<UntilityService>(UntilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
