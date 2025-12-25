# 🚀 RAG News Chatbot – Backend

This is the **backend service** for the **RAG (Retrieval-Augmented Generation) News Chatbot**.  
It provides APIs to process user queries, retrieve relevant news context using vector search, and generate AI-powered responses using LLMs.

---

## 🧠 Tech Stack

- **Node.js** (ES Modules)
- **Express.js** – REST API
- **Qdrant** – Vector database (cloud)
- **Redis (Upstash)** – Caching
- **Groq / Gemini** – LLM providers
- **Jina AI** – Embeddings
- **Render** – Production deployment

---

## 📂 Project Structure

backend/
├── src/
│ ├── index.js # App entry point
│ ├── routes/
│ │ └── chat.js # Chat API route
│ ├── services/
│ │ ├── llm.js # LLM (Groq/Gemini) integration
│ │ ├── qdrant.js # Vector DB operations
│ │ ├── redis.js # Redis cache
│ │ └── embeddings.js# Jina embeddings
│ └── scripts/
│ └── createCollection.js
├── package.json
├── .gitignore
└── README.md

yaml
Copy code

---

## 🔐 Environment Variables

Create these **only in production dashboard (Render)** or local `.env` (never commit `.env`).

PORT=5000

GROQ_API_KEY=your_groq_api_key
GEMINI_API_KEY=your_gemini_api_key
JINA_API_KEY=your_jina_api_key

QDRANT_URL=https://your-qdrant-cloud-url
QDRANT_API_KEY=your_qdrant_api_key

REDIS_URL=rediss://default:xxxxx@xxxxx.upstash.io:6379

yaml
Copy code

---

## ▶️ Running Locally

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Start server
bash
Copy code
npm start
Server will run at:

arduino
Copy code
http://localhost:5000
📡 API Endpoints
🔹 Health Check
sql
Copy code
GET /
Response:

sql
Copy code
RAG News Chatbot Backend Running
🔹 Chat API
bash
Copy code
POST /api/chat
Request Body

json
Copy code
{
  "query": "What is happening in Indian economy?"
}
Response

json
Copy code
{
  "answer": "India's economy is showing strong growth driven by manufacturing..."
}
☁️ Deployment (Render)
Backend is deployed on Render

Start Command:

bash
Copy code
node src/index.js
Environment variables are managed via Render Dashboard

🔒 Security Best Practices
❌ No API keys committed to GitHub

✅ All secrets managed via environment variables

✅ .env added to .gitignore

✅ GitHub push protection respected

🧪 Future Improvements
Rate limiting

Authentication

Streaming responses

Better caching strategy

Logging & monitoring

👨‍💻 Author
Neeraj Madan
Backend Developer | DevOps Enthusiast
