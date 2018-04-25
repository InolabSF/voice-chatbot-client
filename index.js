'use strict';

// libraries
const fs        = require("fs");
const exec      = require('child_process').exec;
const axios     = require('axios');

// constant
const projectId     = JSON.parse(fs.readFileSync("service-account-key.json")).project_id;
const sessionName   = 'test-session'; // name unique id as a session when making contexts in a dialogflow conversation


// get google cloud access token
const childProcess = exec('gcloud auth print-access-token', {async: true});
childProcess.stdout.on('data', function(data) {
    const accessToken = data.replace(/\r?\n/g,"");
    callDialogflow(accessToken);
});


// dialogflow
const callDialogflow = (accessToken) => {
    /* text */
    /*
    const requestBodies = {
        queryInput: {
            text: {
                text: "こんにちは",
                languageCode:"ja"
            }
        }
    };
    */
    /* audio */
    const audio = (new Buffer(fs.readFileSync("hello.wav"))).toString('base64');
    const requestBodies = {
        queryInput: {
            audioConfig: {
                languageCode: 'ja'
            }
        },
        "inputAudio": audio
    };
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    axios.post(`https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionName}:detectIntent`, requestBodies)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
