import express from "express";
import axios from "axios";
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000;

const ALPHA_API_KEY = process.env.ALPHA_API_KEY;
console.log("API KEY:", ALPHA_API_KEY)

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Backend is alive 🚀");
});

app.get("/api/stock/:symbol", async (req, res) => {
    try {
        const { symbol } = req.params;
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHA_API_KEY}`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch stock data" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));