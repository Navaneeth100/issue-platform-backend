import { Injectable } from '@nestjs/common';
import { db } from '../db/drizzle';
import { discussions } from '../db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class DiscussionsService {

  async addDiscussion(issueId: number, message: string) {
    return db.insert(discussions).values({
      issueId,
      message,
    }).returning();
  }

  async getDiscussions(issueId: number) {
    return db
      .select()
      .from(discussions)
      .where(eq(discussions.issueId, issueId));
  }
}