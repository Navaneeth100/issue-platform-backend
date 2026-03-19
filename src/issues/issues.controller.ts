import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
} from "@nestjs/common";
import { IssuesService } from "./issues.service";
import { DiscussionsService } from "../discussions/discussions.service";
import { AiService } from "../ai/ai.service";

@Controller("issues")
export class IssuesController {
  constructor(
    private readonly service: IssuesService,
    private readonly discussionService: DiscussionsService,
    private readonly aiService: AiService
  ) { }

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body) {
    return this.service.update(+id, body);
  }

  @Post(":id/analyze")
  async analyze(@Param("id") id: string) {
    const issue = await this.service.findOne(+id);
    const discussions = await this.discussionService.getDiscussions(+id);

    return this.aiService.analyze(issue[0], discussions);
  }
}