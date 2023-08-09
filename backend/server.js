import process from 'process';
import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 8080;

// Endpoint to fetch news data
app.get('/api/news', async (req, res) => {
  try {
    const apiKey = '2f231bd224374748bb24c03bb05002b9';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;

    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching news data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});