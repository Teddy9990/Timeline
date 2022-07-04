import { Test, TestingModule } from '@nestjs/testing';
import { ProjectPersonnelsController } from './project-personnels.controller';

describe('ProjectPersonnelsController', () => {
  let controller: ProjectPersonnelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectPersonnelsController],
    }).compile();

    controller = module.get<ProjectPersonnelsController>(ProjectPersonnelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
