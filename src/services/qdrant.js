import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { QdrantClient } from "@qdrant/js-client-rest";

// 👇 absolute path to backend/.env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../.env")
});

console.log("QDRANT_URL USED:", process.env.QDRANT_URL);

export const qdrant = new QdrantClient({
  url: process.env.QDRANT_URL,
  apiKey: process.env.QDRANT_API_KEY,
  checkCompatibility: false
});
