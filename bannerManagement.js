const fetch = require('node-fetch');
const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

let url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v2/banners`;

let options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': ACCESS_TOKEN
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));