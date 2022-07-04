import { Controller, Post, Body, Get, Param ,Delete} from '@nestjs/common';
import { ActivityAssignmentService } from './activity-assignment.service';

import { createactivityassignment } from './dto/createactivityassignment.dto';


@Controller('activityassignment')
export class ActivityAssignmentController {
    constructor(private  activityassignmentService: ActivityAssignmentService){}

    @Get('Id')
    async findOne(@Param('Id') Id: string) {
      return this.activityassignmentService.findOne(Id);
    }

    @Get()
    async getactivityassignment() {
        return this.activityassignmentService.getactivityassignment()
    }

    @Post()
    async createactivityassignment(@Body() createDto: createactivityassignment){
        await this.activityassignmentService.createactivityassignment(createDto.projectId,createDto.ActivityId,createDto.UserId, createDto.Dateassigned, createDto.Datedone)
    }

    @Delete(':Id')
    async delete(@Param('Id') Id: string) {
      return this.activityassignmentService.delete(Id);
    }

}
