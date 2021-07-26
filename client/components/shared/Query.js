import axios from 'axios';

const Query = (queryUrl, queryMethod, queryParams) => {
  axios({
    url: queryUrl,
    method: queryMethod,
    data: queryParams
  })
    .then((response) => {
      console.log('success with front end query');
      res.status(200).send('success with query');
    }).catch(err => {
      console.log('front end query error');
      res.status(400).send(err);
    });
}

export default Query;