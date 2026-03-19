import { Injectable } from "@nestjs/common";
import { db } from "../db/drizzle";
import { issues } from "../db/schema";
import { eq } from "drizzle-orm";

@Injectable()
export class IssuesService {
  async create(data: { title: string; description?: string }) {
    return db.insert(issues).values(data).returning();
  }

  async findAll() {
    return db.select().from(issues);
  }

  async findOne(id: number) {
    return db.select().from(issues).where(eq(issues.id, id));
  }

  async update(id: number, data: any) {
    return db
      .update(issues)
      .set(data)
      .where(eq(issues.id, id))
      .returning();
  }
}