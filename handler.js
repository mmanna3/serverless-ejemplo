"use strict"

const ClubReadyApi = require('./clubReadyConnector')

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
}

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
}

module.exports.secretTest = async (event) => { 

    var status_info = await ClubReadyApi.getLocations();

    const response = {
        statusCode: 200,
        body: JSON.stringify(status_info),
    };
    return response;
}