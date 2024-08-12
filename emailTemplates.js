const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// Path to the content.html file
const contentFilePath = path.join(__dirname, 'emailTemplates/Passoword-Reset', 'content.html');

// Read the content of the content.html file
fs.readFile(contentFilePath, 'utf8', (err, content) => {
  if (err) {
    console.error('Error reading content.html file:', err);
    return;
  }

  let url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/marketing/email-templates/account_reset_password_email`;

  let options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': ACCESS_TOKEN
    },
    body: JSON.stringify({
      type_id: "account_reset_password_email",
      body: content,  // Use the content of content.html here
      translations: [
        {
          locale: "en",
          keys: {
            reset_password: "To change your customer account password at {{name}} please click this link or copy and paste it into your browser:"
          }
        }
      ],
      subject: "Demo subject to Reset your password at {{store.name}}"
    })
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
});
