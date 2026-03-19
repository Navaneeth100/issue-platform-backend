import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const issues = pgTable("issues", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").default("OPEN"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const discussions = pgTable("discussions", {
  id: serial("id").primaryKey(),
  issueId: integer("issue_id"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});