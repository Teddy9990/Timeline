import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,   } from "mongoose";
import { type } from "os";

export type activityassignmentDoc=activityassignment & Document

@Schema()
export class activityassignment{
   
    @Prop()
    dId:string

    @Prop()
    projectidId:string

    @Prop()
    ActivityId:string
    
    @Prop()
    userId:string
    
    @Prop()
    Dateassigned:Date
    
     @Prop()
    Datedone:Date
    
    

}

export const activityassignmentSchema=SchemaFactory.createForClass(activityassignment)