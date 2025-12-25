import express from "express";
import redisClient from "../redis/client.js";
import { getSessionId } from "../utils/session.js";
import { callLLM } from "../services/llm.js";
import { searchRelevantDocs } from "../services/vectorSearch.js";

const router = express.Router();

/**
 * POST /api/chat
 */
router.post("/", async (req, res) => {
  const { message, sessionId } = req.body;
  const sid = getSessionId(sessionId);

  try {
    const contextDocs = await searchRelevantDocs(message);

    const prompt = `
You are a news assistant.

Context:
${contextDocs.join("\n")}

Question:
${message}
`;
const answer = await callLLM(prompt);


    const historyKey = `session:${sid}`;

    await redisClient.rPush(
      historyKey,
      JSON.stringify({ role: "user", content: message }),
      JSON.stringify({ role: "assistant", content: answer })
    );

    await redisClient.expire(historyKey, 3600); // 1 hour TTL

    res.json({
      sessionId: sid,
      answer,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

/**
 * GET session history
 */
router.get("/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  const history = await redisClient.lRange(`session:${sessionId}`, 0, -1);

  res.json(history.map(JSON.parse));
});

/**
 * DELETE session
 */
router.delete("/:sessionId", async (req, res) => {
  await redisClient.del(`session:${req.params.sessionId}`);
  res.json({ message: "Session cleared" });
});

export default router;
