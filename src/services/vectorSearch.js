import { createEmbedding } from "./embedding.js";
import { qdrant } from "./qdrant.js";

const COLLECTION = "news_articles";

export async function searchRelevantDocs(query) {
  const queryEmbedding = await createEmbedding(query);

  const searchResult = await qdrant.search(COLLECTION, {
    vector: queryEmbedding,
    limit: 5,
  });

  return searchResult.map(item => item.payload.text);
}
