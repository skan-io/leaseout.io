'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const bluebird = require('bluebird');

AWS.config.setPromisesDependency(bluebird);

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.handler = (event, context, callback)=> {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  if (typeof data.fullname !== 'string' || typeof data.email !== 'string') {
    callback(new Error('Could not update the profile'));
    return;
  }

  const params = {
    TableName: process.env.PROFILE_TABLE,
    Key: {
      id: event.pathParameters.id
    },
    ExpressionAttributeValues: {
      ':email': data.email,
      ':fullname': data.fullname,
      ':updatedAt': timestamp
    },
    UpdateExpression: 'SET email = :email, fullname = :fullname, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW'
  };

  dynamoDb.update(params).promise()
    .then((res)=> {
      callback(
        null, {
          statusCode: 200,
          body: JSON.stringify({
            message:
              `Sucessfully updated ${data.fullname} profile with email ${data.email}`,
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
            message: `Unable to update ${data.fullname} profile with email ${data.email}`,
            error: err
          })
        }
      );
    });
};
