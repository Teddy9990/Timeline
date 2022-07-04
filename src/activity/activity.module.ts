import { MongooseModule,} from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { Activity, ActivitySchema } from './schema/activity.schema';


@Module({
  imports: [MongooseModule.forFeature([{name:Activity.name, schema:ActivitySchema}],)],
  controllers: [ActivityController],
  providers: [ActivityService,]
})
export class ActivityModule {}



