import { Module } from '@nestjs/common';
import { IssuesModule } from './issues/issues.module';
import { AiModule } from './ai/ai.module';
import { DiscussionsModule } from './discussions/discussions.module';


@Module({
  imports: [IssuesModule, DiscussionsModule, AiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}