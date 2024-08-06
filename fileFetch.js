const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// Load options.json
const optionsJsonPath = path.join(__dirname, 'scripts', 'create_script', 'options.json');
const optionsJson = JSON.parse(fs.readFileSync(optionsJsonPath, 'utf8'));

// Load content.html
const contentHtmlPath = path.join(__dirname, 'scripts', 'create_script', 'content.html');
const contentHtml = fs.readFileSync(contentHtmlPath, 'utf8');

// Replace the html field with the actual HTML content
optionsJson.html = contentHtml;

let url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/content/scripts`;

let options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': ACCESS_TOKEN
  },
  body: JSON.stringify(optionsJson)
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
