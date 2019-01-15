'use strict';
const AWS = require('aws-sdk');
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

  dynamoDb.delete(params).promise()
    .then((res)=> {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message:
            `Sucessfully deleted ${event.pathParameters.id} profile`,
          res: res
        })
      });
    })
    .catch((err)=> {
      callback(
        null, {
          statusCode: 500,
          body: JSON.stringify({
            message: `Unable to delete ${event.pathParameters.id} profile`,
            error: err
          })
        }
      );
    });
};
