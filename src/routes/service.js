const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname+'../../html/service.html'));
});

router.post('/', (req, res) =>{
    let text = req.body.textToAnalyze;
    res.send(text);
});

module.exports = router;