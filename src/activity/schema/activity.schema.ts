import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,  } from "mongoose";

export type ActivityDoc= Activity & Document

@Schema()
export class Activity{
    @Prop()
    Id:string
    
    @Prop()
    name:string
    
    @Prop()
    Description:string
    
    @Prop()
    Duration:string
    
    @Prop()
    Startdate:string

    @Prop()
    Enddate:string


  

  }

  
  export const ActivitySchema=SchemaFactory.createForClass(Activity)