import {
  Controller,
  Post,
  Get,
  Param,
  Body,
} from '@nestjs/common';
import { DiscussionsService } from './discussions.service';

@Controller('issues')
export class DiscussionsController {
  constructor(private readonly service: DiscussionsService) {}

  @Post(':id/discussions')
  addDiscussion(
    @Param('id') id: string,
    @Body() body: { message: string },
  ) {
    return this.service.addDiscussion(+id, body.message);
  }

  @Get(':id/discussions')
  getDiscussions(@Param('id') id: string) {
    return this.service.getDiscussions(+id);
  }
}