const axios = require('axios');
const express = require('express');
const API_KEY = require('../config.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// app.all('/*', (req, res) => {
//   axios.defaults.headers.common['Authorization'] = API_KEY;
//   axios({
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${req.url}`,
//     method: req.method,
//     data: req.data || null
//   })
//     .then((response) => {
//       console.log('success with backend query');
//       res.status(200).send(response.data);
//     }).catch(err => {
//       console.log('req' , req.body); //delete this line
//       console.log('failure with backend query');
//       res.status(400).send(err);
//     });
// })

app.all('/*', (req, res) => {
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${req.url}`,
    method: req.method,
    data: req.data || req.body || null
  })
    .then((response) => {
      console.log('success with backend query');
      res.status(200).send(response.data);
    }).catch(err => {
      console.log('req body' , req.body); //delete this line
      console.log('req data' , req.data); //delete this line
      console.log('failure with backend query');
      res.status(400).send(err);
    });
})

app.listen(3000);

