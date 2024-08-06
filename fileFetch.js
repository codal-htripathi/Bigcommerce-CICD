const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.STENCIL_ACCESS_TOKEN;

const fetch = require('node-fetch');
const optionsHtml = require('./scripts/create_script/options.json');

let url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/content/scripts`;

let options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': ACCESS_TOKEN
  },
  body: JSON.stringify(optionsHtml)
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
