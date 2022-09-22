"use strict"

const HTTPS = require('https')
const SecretsManager = require('./secretsManager.js')

class ClubReadyConnector {

  static invokeClubReady(defaultOptions, payload) { 
    return new Promise((resolve, reject) => {
      const options = { ...defaultOptions, method: 'GET' };
      const req = HTTPS.request(options, res => {
          let buffer = "";
          res.on('data', chunk => buffer += chunk)
          res.on('end', () => resolve(JSON.parse(buffer)))
      });
      req.on('error', e => reject(e.message));
      req.write(JSON.stringify(payload));
      req.end();
    })
  }

  static async getLocations() {
    const secretName = 'clubReadyApiKey';
    const region = 'us-east-1';
    let apiKey = await SecretsManager.getSecret(secretName, region);

    const defaultOptions = {
      host: 'clubready.com',    
      path: `/api/v2/{ApiKey}/corp/{ChainId}/clubs?ApiKey=${apiKey}&ChainId=18`,
      headers: {
       'Content-Type': 'application/json',
      }
    }

    return this.invokeClubReady(defaultOptions, '');
  }

}
module.exports = ClubReadyConnector;