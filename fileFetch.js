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

const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/content/scripts`;
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Auth-Token': ACCESS_TOKEN
};

// Function to get existing scripts
async function getScripts() {
  const response = await fetch(url, { headers });
  return response.json();
}

// Function to update a script by UUID
async function updateScript(uuid, scriptData) {
  const updateUrl = `${url}/${uuid}`;
  const options = {
    method: 'PUT',
    headers,
    body: JSON.stringify(scriptData)
  };

  const response = await fetch(updateUrl, options);
  return response.json();
}

// Function to create a new script
async function createScript(scriptData) {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(scriptData)
  };

  const response = await fetch(url, options);
  return response.json();
}

// Main function to handle script creation or update
(async () => {
  try {
    const scriptsResponse = await getScripts();
    const scripts = scriptsResponse.data;
    const existingScript = scripts.find(script => script.name === optionsJson.name);

    if (existingScript) {
      console.log(`Updating script with UUID: ${existingScript.uuid}`);
      const result = await updateScript(existingScript.uuid, optionsJson);
      console.log('Update result:', result);
    } else {
      console.log('Creating new script');
      const result = await createScript(optionsJson);
      console.log('Create result:', result);
    }
  } catch (err) {
    console.error('Error:', err);
  }
})();
