const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const crypto = require('crypto');

const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const emailTemplatesDir = path.join(__dirname, 'emailTemplates');

// Function to generate a hash of the file content
function generateHash(content) {
  return crypto.createHash('md5').update(content).digest('hex');
}

// Function to get the current content of the template from BigCommerce
async function getCurrentTemplateContent(typeId) {
  const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/marketing/email-templates/${typeId}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': ACCESS_TOKEN
      }
    });
    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error(`Error fetching current template content for ${typeId}:`, error);
    return null;
  }
}

// Function to update the template in BigCommerce
async function updateTemplate(typeId, content) {
  const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/marketing/email-templates/${typeId}`;

  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': ACCESS_TOKEN
    },
    body: JSON.stringify({
      type_id: typeId,
      body: content,
      translations: [
        {
          locale: "en",
          keys: {
            reset_password: "To change your customer account password at {{name}} please click this link or copy and paste it into your browser:"
          }
        }
      ],
      subject: `Reset your password at {{store.name}}`
    })
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(`Updated template ${typeId}:`, json);
  } catch (error) {
    console.error(`Error updating template ${typeId}:`, error);
  }
}

// Loop through each folder in emailTemplates
fs.readdir(emailTemplatesDir, (err, folders) => {
  if (err) {
    console.error('Error reading emailTemplates directory:', err);
    return;
  }

  folders.forEach(async (folder) => {
    const folderPath = path.join(emailTemplatesDir, folder);
    const contentFilePath = path.join(folderPath, 'content.html');

    // Check if content.html exists in the folder
    if (fs.existsSync(contentFilePath)) {
      fs.readFile(contentFilePath, 'utf8', async (err, content) => {
        if (err) {
          console.error(`Error reading content.html in ${folder}:`, err);
          return;
        }

        const typeId = folder; // Assuming folder name matches the template type ID
        const currentContent = await getCurrentTemplateContent(typeId);

        // Update the template if the content has changed
        if (generateHash(content) !== generateHash(currentContent)) {
          console.log(`Content has changed for ${typeId}, updating...`);
          await updateTemplate(typeId, content);
        } else {
          console.log(`No changes detected for ${typeId}`);
        }
      });
    } else {
      console.log(`No content.html found in ${folder}`);
    }
  });
});
