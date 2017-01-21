'use strict';
var router = require('express').Router();
var Clarifai = require('clarifai');
var config = require(__dirname + '/config.js').clarifi;
module.exports = router;

// instantiate a new Clarifai app passing in your clientId and clientSecret

var app = new Clarifai.App(config[0], config[1]);

router.get('/', function(req, res) {
    res.send('hey');
});

router.post('/clarifai', function (req, res) {
    var imageUrl = req.body.imageUrl + '';
    // res.send('imgurl', imageUrl);
    app.models.predict(Clarifai.GENERAL_MODEL, imageUrl).then(
        function(response) {
            res.send(response.outputs[0].data.concepts);
        },
        function(err) {
            console.error('error from clarifi router', err);
            res.sendStatus(404);
        }
    )
    .catch(function (handleError) {
        console.error('POST request failed', handleError);
    });
});
