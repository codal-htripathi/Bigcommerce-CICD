const fetch = require("node-fetch");
const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

let url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/marketing/email-templates`;

let options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': ACCESS_TOKEN
    },
    body: '{"type_id":"account_reset_password_email","body":"<!DOCTYPE html> <html lang=\"en\"> <head>     <meta charset=\"UTF-8\">     <title>Title</title> </head> <body> <p>     {{lang \"reset_password\" name=store.name}} </p> <br/> <br/> <a href=\"{{account.reset_password_link}}\">     {{account.reset_password_link}} </a>  </body> </html>","translations":[{"locale":"en","keys":{"reset_password":"Harshit Tripathi To change your customer account password at {{name}} please click this link or copy and paste it into your browser:"}}],"subject":"Harshit Tripathi Reset your password at {{store.name}}"}'
  };

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
