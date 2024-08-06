const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const scriptsDir = path.join(__dirname, 'scripts');
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

// Function to process each script folder
async function processScriptFolder(folder) {
  const optionsJsonPath = path.join(scriptsDir, folder, 'options.json');
  const contentHtmlPath = path.join(scriptsDir, folder, 'content.html');

  if (fs.existsSync(optionsJsonPath) && fs.existsSync(contentHtmlPath)) {
    const optionsJson = JSON.parse(fs.readFileSync(optionsJsonPath, 'utf8'));
    const contentHtml = fs.readFileSync(contentHtmlPath, 'utf8');

    optionsJson.html = contentHtml;

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
  } else {
    console.error(`Missing options.json or content.html in ${folder}`);
  }
}

// Main function to iterate over all script folders and process them
(async () => {
  try {
    const scriptFolders = fs.readdirSync(scriptsDir).filter(file => fs.statSync(path.join(scriptsDir, file)).isDirectory());

    for (const folder of scriptFolders) {
      await processScriptFolder(folder);
    }
  } catch (err) {
    console.error('Error:', err);
  }
})();
