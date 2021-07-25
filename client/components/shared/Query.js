import axios from 'axios';


const Query = (queryUrl, queryMethod, queryData) => {
  axios({
    url: queryUrl,
    method: queryMethod,
    data: queryData
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