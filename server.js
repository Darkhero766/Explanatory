import dotenv from "dotenv"
dotenv.config()
import express from "express"
import OpenAI from "openai"

const app = express();
const openai = new OpenAI({apikey: process.env.OPENAI});

app.use(express.json());

app.post("/chat", async (req, res) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{role: "user", content: req.body.message}]
    });

    res.json({reply: response.choices[0].message});
});

app.listen(3000, () => console.log("server running kn 3000"));

