const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = 5005;
const app = express();
const Model = require("./Model"); // Import Model correctly
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

let queryUser; // Define queryUser variable outside run function

async function run() {
    try {
        await client.connect();
        queryUser = client.db("SARNCHATAPP").collection("queryuser");
        await client.db("SARNCHATAPP").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensure that the client will close when you finish/error
    }
}

run(); // Call the run function to start the server

app.post("/", async (req, res) => {
    try {
        const query = req.body.query;

        const result1 = await queryUser.insertOne({ query });
     
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(query);
        const response = await result.response;
        const generatedText = response.text();
     
        res.send(generatedText);
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).send("Error generating content");
    }
});

app.get("/query", async (req, res) => {
    try {
        const result = await queryUser.find({}).toArray();
       
        res.send(result);
    } catch (error) {
        console.error("Error fetching queries:", error);
        res.status(500).send("Error fetching queries");
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
