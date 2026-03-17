const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "openrouter/hunter-alpha",
    messages: [{ role: "user", content: "What is agentic Ai?" }],
  });

  console.log(completion.choices[0].message);
}
main();
