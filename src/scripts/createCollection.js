import { qdrant } from "../services/qdrant.js";

const COLLECTION = "news_articles";

await qdrant.createCollection(COLLECTION, {
  vectors: {
    size: 768,
    distance: "Cosine"
  }
});

console.log("Qdrant collection created");
