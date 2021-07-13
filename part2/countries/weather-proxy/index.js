const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3003;

app.use(cors());

app.get('/location/search/:locationName', async (req, res) => {
  try {
    const locationName = req.params.locationName;
    const response = await axios.get('https://www.metaweather.com/api/location/search/', {
      params: {
        query: locationName
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
  }
});
  
app.get('/location/:woeid', async (req, res) => {
  try {
    const woeid = req.params.woeid;
    const response = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`)
    res.json(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
