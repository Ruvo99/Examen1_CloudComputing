const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const router = require('express').Router();
const path = require('path');

require('dotenv').config();

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: process.env.API_KEY,
    }),
    serviceUrl: process.env.SERVICE_URL,
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../html/service.html'));
});

router.post('/', (req, res) => {
    let text = req.body.textToAnalyze;
    const toneParams = {
        toneInput: { 'text': text },
        contentType: 'text/plain',
      };
    toneAnalyzer.tone(toneParams).then(
        toneAnalysis => res.send(toneAnalysis.result)
    ).catch(err => 
        res.send(err)
    );
});

module.exports = router;