const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// Path to the emailTemplates directory
const templatesDir = path.join(__dirname, 'emailTemplates');

// Function to update the email template
const updateEmailTemplate = (templateDir) => {
  const contentFilePath = path.join(templateDir, 'content.html');
  const optionsFilePath = path.join(templateDir, 'options.json');

  // Read the content.html file
  fs.readFile(contentFilePath, 'utf8', (err, content) => {
    if (err) {
      console.error(`Error reading content.html file in ${templateDir}:`, err);
      return;
    }

    // Read the options.json file
    fs.readFile(optionsFilePath, 'utf8', (err, optionsData) => {
      if (err) {
        console.error(`Error reading options.json file in ${templateDir}:`, err);
        return;
      }

      let options;
      try {
        options = JSON.parse(optionsData);
      } catch (parseErr) {
        console.error(`Error parsing options.json file in ${templateDir}:`, parseErr);
        return;
      }

      // Use the content of content.html
      options.body = content;

      let url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/marketing/email-templates/${options.type_id}`;

      let requestOptions = {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Auth-Token': ACCESS_TOKEN
        },
        body: JSON.stringify(options)
      };

      fetch(url, requestOptions)
        .then(res => res.json())
        .then(json => console.log(`Template ${options.type_id} updated successfully:`, json))
        .catch(err => console.error(`Error updating template ${options.type_id}:`, err));
    });
  });
};

// Loop through each folder in the emailTemplates directory
fs.readdir(templatesDir, (err, folders) => {
  if (err) {
    console.error('Error reading emailTemplates directory:', err);
    return;
  }

  folders.forEach(folder => {
    const templateDir = path.join(templatesDir, folder);
    if (fs.lstatSync(templateDir).isDirectory()) {
      updateEmailTemplate(templateDir);
    }
  });
});
