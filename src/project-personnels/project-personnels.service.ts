import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Personnel } from './project-personnel.model';
import { ProjectPersonnels, ProjectPersonnelsDoc } from './schema/project-personnels.schema';

@Injectable()
export class ProjectPersonnelsService {
    // personnel: Personnel[] = [];

    // insertProjectPersonnelsModule(project: string, user: string, personnel: string) {
    //     const personnelId = new Date().toString();
    //     const newPersonnel = new Personnel(personnelId, project, user, personnel)
    //     this.personnel.push(newPersonnel);
    //     return personnelId;
    // }
    
    
    constructor(@InjectModel(ProjectPersonnels.name) private projectPersonnelsModel: Model<ProjectPersonnelsDoc>){}
    
    async createProjectPersonnels(ProjectId: string, UserId: string, Personneltype: string){
        const personnelId =  Math.floor(Math.random()*99).toString();
        return await this.projectPersonnelsModel.create({personnelId,UserId,ProjectId,Personneltype})
}
        async getProjectPersonnels() {
            return this.projectPersonnelsModel.find().exec();
        }

        async findOne(personnelId: string) {
            return this.projectPersonnelsModel.findById({ personnelId })
        }

        async findAll() {
            return this.projectPersonnelsModel.find().exec();
          }
        
        
        
          async delete(personnelId: string) {
            const deleted = await this.projectPersonnelsModel
              .findByIdAndRemove({ personnelId })
              .exec();
            return deleted;
          }

}




