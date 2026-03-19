import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { DiscussionsModule } from '../discussions/discussions.module';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [DiscussionsModule, AiModule],
  controllers: [IssuesController],
  providers: [IssuesService],
})
export class IssuesModule {}