'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const bluebird = require('bluebird');


AWS.config.setPromisesDependency(bluebird);

const dynamoDb = new AWS.DynamoDB.DocumentClient();


const createProfile = (profile)=> {
  const profileInfo = {
    TableName: process.env.PROFILE_TABLE,
    Item: profile
  };

  return dynamoDb.put(profileInfo).promise()
    .then(()=> profile);
};

// eslint-disable-next-line max-params
const createProfileInfo = (fullname, email)=> {
  const timestamp = new Date().getTime();
  return {
    id: uuid.v1(),
    fullname: fullname,
    email: email,
    submittedAt: timestamp,
    updatedAt: timestamp
  };
};

// eslint-disable-next-line max-statements
module.exports.handler = (event, context, callback)=> {
  const requestBody = JSON.parse(event.body);
  const fullname = requestBody.fullname;
  const email = requestBody.email;


  if (typeof fullname !== 'string' || typeof email !== 'string') {
    callback(
      new Error('Couldn not create profile because of validation errors.')
    );

    return;
  }

  const profile = createProfileInfo(fullname, email);

  createProfile(profile)
    .then((res)=> {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message:
            `Sucessfully created ${fullname} profile with email ${email}`,
          res: res
        })
      });
    })
    .catch((err)=> {
      callback(
        null, {
          statusCode: 500,
          body: JSON.stringify({
            message: `Unable to create ${fullname} profile with email ${email}`,
            error: err
          })
        }
      );
    });
};
