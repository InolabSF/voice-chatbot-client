## installation

- [save service-account-key.json on top dir](https://dialogflow.com/docs/reference/v2-auth-setup#getting_the_service_account_key)

- [install gcloud CLI](https://cloud.google.com/sdk/docs/)

- [set key to gcloud CLI](https://dialogflow.com/docs/reference/v2-auth-setup)

```
$ yarn install
```

## test

```
$ node index.js 

input:   hello.wav
output:  json below

{ responseId: 'b5973a3b-839d-4a11-940f-96d725ffd60a',
  queryResult:
   { queryText: 'こんにちは',
     speechRecognitionConfidence: 0.8946659,
     action: 'input.unknown',
     parameters: {},
     allRequiredParamsPresent: true,
     fulfillmentText: '今、なんておっしゃいましたか？',
     fulfillmentMessages: [ [Object] ],
     intent:
      { name: 'projects/test-1b3cb/agent/intents/dbc68ad9-8405-4d5f-8e5e-9b722d6d1e04',
        displayName: 'Default Fallback Intent' },
     intentDetectionConfidence: 1,
     diagnosticInfo: {},
     languageCode: 'ja' } }
```
