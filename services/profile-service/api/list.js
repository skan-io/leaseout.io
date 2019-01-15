'use strict';

const AWS = require('aws-sdk');
const bluebird = require('bluebird');


AWS.config.setPromisesDependency(bluebird);

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.handler = (event, context, callback)=> {
  const params = {
    TableName: process.env.PROFILE_TABLE,
    ProjectionExpression: 'id, fullname, email'
  };

  dynamoDb.scan(params).promise()
    .then((res)=> {
      callback(
        null, {
          statusCode: 200,
          body: JSON.stringify({
            message:
              `Sucessfully fetched all profiles`,
            res: res
          })
        }
      );
    })
    .catch((err)=> {
      callback(
        null, {
          statusCode: 500,
          body: JSON.stringify({
            message: `Unable to fetch all profiles`,
            error: err
          })
        }
      );
    });
};
