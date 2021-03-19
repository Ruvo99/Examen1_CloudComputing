const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const router = require('express').Router();

require('dotenv').config();

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: process.env.API_KEY,
    }),
    serviceUrl: process.env.SERVICE_URL,
});


router.post('/', (req, res) => {
    let text = req.body.textToAnalyze;
    console.log(req.body);
    if (text) {
        const toneParams = {
            toneInput: { 'text': text },
            contentType: 'text/plain',
        };
        toneAnalyzer.tone(toneParams).then(
            toneAnalysis => res.send((toneAnalysis.result.document_tone.tones.length)?toneAnalysis.result.document_tone.tones[0]:{})
        ).catch(err =>
            res.send({ "error": err })
        );
    } else {
        res.send({ error: 'Falta atributo textToAnalyze' })
    }
});

module.exports = router;
