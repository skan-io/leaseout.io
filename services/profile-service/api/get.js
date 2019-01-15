'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const bluebird = require('bluebird');

AWS.config.setPromisesDependency(bluebird);

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.handler = (event, context, callback)=> {
  const params = {
    TableName: process.env.PROFILE_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  };

  dynamoDb.get(params).promise()
    .then((res)=> {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message:
            `Sucessfully fetched ${event.pathParameters.id} profile`,
          res: res
        })
      });
    })
    .catch((err)=> {
      callback(
        null, {
          statusCode: 500,
          body: JSON.stringify({
            message: `Unable to fetch ${event.pathParameters.id} profile`,
            error: err
          })
        }
      );
    });
};
