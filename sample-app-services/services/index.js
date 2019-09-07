const axios = require('axios');
const instance = axios.create({
  baseURL: 'https://books.zoho.com/api/v3/',
  timeout: 100000,
  headers: {'Authorization': 'Zoho-authtoken db36e02a50b57e081efe533a8a0f834b'}
});

async function getOrganizations(options, callback) {
  try {
    let result;
    if (options.organization_id) {
      result = await instance.get('organizations?organization_id=' + options.organization_id);
    } else {
      result = await instance.get('organizations');
    }
    callback(null, result.data);
  } catch (err) {
    console.log('Found Error: ', err.message);
    callback(err);
  }
}

module.exports = {
  'getOrganizations': getOrganizations
}