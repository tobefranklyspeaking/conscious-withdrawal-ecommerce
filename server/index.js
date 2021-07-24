const axios = require('axios');
const express = require('express');
const API_KEY = require('../config.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.all('/*', (req, res) => {
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${req.url}`,
    method: req.method,
    data: req.data || null
  })
    .then((response) => {
      console.log('success with API request');
      res.status(200).send(response.data);
    }).catch(err => {
      console.log('server to API error', req.url);
      res.status(400).send(err);
    });
})

app.listen(3000);