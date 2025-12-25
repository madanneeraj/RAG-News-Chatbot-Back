import { qdrant } from "../services/qdrant.js";
import { createEmbedding } from "../services/embedding.js";

const COLLECTION = "news_articles";

const docs = [
  "India's economy showed strong GDP growth driven by manufacturing.",
  "RBI kept interest rates unchanged amid inflation concerns.",
  "Global markets reacted cautiously to US Federal Reserve announcements."
];

const points = [];

for (let i = 0; i < docs.length; i++) {
  const embedding = await createEmbedding(docs[i]);

  points.push({
    id: i + 1,
    vector: embedding,
    payload: {
      text: docs[i]
    }
  });
}

await qdrant.upsert(COLLECTION, {
  points
});

console.log("Seed data inserted into Qdrant");
