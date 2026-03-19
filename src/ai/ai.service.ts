import { Injectable } from "@nestjs/common";
import { GoogleGenerativeAI } from "@google/generative-ai";

@Injectable()
export class AiService {
  async analyze(issue: any, discussions: any[]) {
    try {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

      console.log("API KEY:", process.env.GEMINI_API_KEY);

      const model = genAI.getGenerativeModel({
        model: "gemini-3-flash-preview"
      });

      const prompt = `
      Issue Title: ${issue.title}
      Description: ${issue.description}

      Discussions:
      ${discussions.map((d) => d.message).join("\n")}

      Provide:
      1. Summary
      2. Root Cause
      3. Suggested Fix
      `;

      const result = await model.generateContent(prompt);

      return result.response.text();
    } catch (error) {

      console.log("FULL ERROR:", error);

    }
  }
}