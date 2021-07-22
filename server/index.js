const axios = require('axios');
const React = require('react');
const express = require('express');
const API_KEY = require('../config.js');
const path = require('path');

const app = express();

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
      console.log('success with server request');
      res.status(200).send(response.data);
    }).catch(err => {
      console.log('error fetching from api');
      res.status(401).send(err);
    });
})

app.listen(3000);