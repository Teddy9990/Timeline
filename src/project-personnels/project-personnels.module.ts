import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectPersonnelsController } from './project-personnels.controller';
import { ProjectPersonnels, ProjectPersonnelsSchema } from './schema/project-personnels.schema';
import { ProjectPersonnelsService } from './project-personnels.service';

@Module({
imports: [MongooseModule.forFeature([{name:ProjectPersonnels.name, schema: ProjectPersonnelsSchema}],)],
  controllers: [ProjectPersonnelsController],
  providers: [ProjectPersonnelsService,]
})
export class ProjectPersonnelsModule {}

