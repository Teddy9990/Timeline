import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { Activity,ActivityDoc } from './schema/activity.schema';
@Injectable()
export class ActivityService {

    // personnel: Personnel[] = [];

    // insertProjectPersonnelsModule(project: string, user: string, personnel: string) {
    //     const personnelId = new Date().toString();
    //     const newPersonnel = new Personnel(personnelId, project, user, personnel)
    //     this.personnel.push(newPersonnel);
    //     return personnelId;
    // }
    
    
    constructor (@InjectModel (Activity.name) private activity: Model<ActivityDoc>){}
    
    async create(Id: string, name:string, Description:string, Duration:Number, StartDate:Date, EndDate:Date){
        return await this.activity.create({Id,name, Description, Duration, StartDate, EndDate})
}
        async getactivity() {
            return this.activity.find().exec();
        }

        async findOne(Id: string) {
            return this.activity.findById({ Id })
        }

        async findAll() {
            return this.activity.find().exec();
          }
        
        
        
          async delete(_Id: string) {
            const deleted = this.activity
              .findByIdAndRemove({ _id:Object(_Id) })
              .exec();
            return deleted;
          }
}
