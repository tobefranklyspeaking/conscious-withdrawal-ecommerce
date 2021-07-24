import axios from 'axios';


const Query = (relativeUrl) => {
  axios({
    url: relativeUrl,
    method: method,
    data: requestData
  })
    .then((response) => {
      console.log('success with query request');
      res.status(200).send('success with query');
    }).catch(err => {
      console.log('query error', req.data);
      res.status(400).send(err);
    });
}

export default Query;