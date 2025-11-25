
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import OpenAI from "openai"

const app = express();
const openai = new OpenAI({apiKey: process.env.OPENAI});

app.use(express.json());
app.use(express.static('.'));

app.post("/chat", async (req, res) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{role: "user", content: req.body.message}]
    });

    res.json({reply: response.choices[0].message});
});

app.listen(5000, () => console.log("Server running on port 5000"));
