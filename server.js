import dotenv from "dotenv"
dotenv.config()
import express from "express"
import OpenAi from "openai"

const app = express();
const openai = new OpenAi({apikey: process.env.OPENAI_KEY_AI});

app.use(express.json());

app.post("/chat", async (req, res) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{role: "user", content: req.body.message}]
    });

    req.json({reply: response.choices[0].message});
});

app.listen(3000, () => console.log("server running kn 3000"));

