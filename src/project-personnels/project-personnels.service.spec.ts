import { Test, TestingModule } from '@nestjs/testing';
import { ProjectPersonnelsService } from './project-personnels.service';

describe('ProjectPersonnelsService', () => {
  let service: ProjectPersonnelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectPersonnelsService],
    }).compile();

    service = module.get<ProjectPersonnelsService>(ProjectPersonnelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
