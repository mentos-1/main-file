const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request,response) =>{
    respose.send('hello world');
});