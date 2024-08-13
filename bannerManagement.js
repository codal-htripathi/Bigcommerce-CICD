const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const STORE_HASH = process.env.STORE_HASH;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const bannersDir = path.join(__dirname, 'banners');
const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v2/banners`;
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Auth-Token': ACCESS_TOKEN
};

// Function to get existing banners
async function getBanners() {
  const response = await fetch(url, { headers });
  return response.json();
}

// Function to update a banner by ID
async function updateBanner(id, bannerData) {
  const updateUrl = `${url}/${id}`;
  const options = {
    method: 'PUT',
    headers,
    body: JSON.stringify(bannerData)
  };

  const response = await fetch(updateUrl, options);
  return response.json();
}

// Function to create a new banner
async function createBanner(bannerData) {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(bannerData)
  };

  const response = await fetch(url, options);
  return response.json();
}

// Function to process each banner folder
async function processBannerFolder(folder) {
  const optionsJsonPath = path.join(bannersDir, folder, 'options.json');
  const contentHtmlPath = path.join(bannersDir, folder, 'content.html');

  if (fs.existsSync(optionsJsonPath) && fs.existsSync(contentHtmlPath)) {
    const optionsJson = JSON.parse(fs.readFileSync(optionsJsonPath, 'utf8'));
    const contentHtml = fs.readFileSync(contentHtmlPath, 'utf8');

    optionsJson.content = contentHtml;

    const bannersResponse = await getBanners();
    const banners = bannersResponse.data;
    const existingBanner = banners.find(banner => banner.id === optionsJson.id);

    if (existingBanner) {
      console.log(`Updating banner with ID: ${existingBanner.id}`);
      const result = await updateBanner(existingBanner.id, optionsJson);
      console.log('Update result:', result);
    } else {
      console.log('Creating new banner');
      const result = await createBanner(optionsJson);
      console.log('Create result:', result);
    }
  } else {
    console.error(`Missing options.json or content.html in ${folder}`);
  }
}

// Main function to iterate over all banner folders and process them
(async () => {
  try {
    const bannerFolders = fs.readdirSync(bannersDir).filter(file => fs.statSync(path.join(bannersDir, file)).isDirectory());

    for (const folder of bannerFolders) {
      await processBannerFolder(folder);
    }
  } catch (err) {
    console.error('Error:', err);
  }
})();
