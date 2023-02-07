var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', async function(req, res) {
   try{
    const response = await axios.get(process.env.API_URL + '/genre/movie/list', {
      params: {
        api_key: process.env.API_KEY,
        language: process.env.LANGUAGE
      }
    });
    res.send(response.data);
   } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
  }
});

module.exports = router;