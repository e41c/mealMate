const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const YELP_API_KEY = process.env.YELP_API_KEY; 

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.get('/search', async (req, res) => {
  try {
    const { term, location, categories } = req.query; 
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`, 
      },
      params: {
        term, 
        location, 
        categories,
        
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
