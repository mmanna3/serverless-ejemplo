"use strict";

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