import Groq from "groq-sdk";

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY missing");
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function callLLM(prompt) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }]
  });

  return completion.choices[0].message.content;
}
