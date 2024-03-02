const express = require("express");
const PORT = 5000;
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post("/", async (req, res) => {
    try {
        const query = req.body.query;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "Write a story about a magic backpack.";
        const result = await model.generateContent(query);
        const response = await result.response;
        const generatedText = response.text(); // Rename variable to avoid conflict
        console.log(generatedText);
        res.send(generatedText); // Send the generated text as response
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).send("Error generating content");
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
