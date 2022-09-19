"use strict";

const SecretsManager = require('./secretsManager.js');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hello!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.healthcheck = async (event) => {  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "I am healthy!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.secretTest = async (event) => {
  var secretName = 'clubReadyApiKey';
  var region = 'us-east-1';
  var apiValue = await SecretsManager.getSecret(secretName, region);
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `El secret es: ${apiValue}`,
        input: event,
      },
      null,
      2
    ),
  };
};