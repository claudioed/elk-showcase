/**
 * Created by Claudio E. de Oliveira<claudioed.oliveira@gmail.com> on 03/11/15.
 */
'use strict';

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var userController = require('./server/controller/user-controller');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port setup
var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'ROOT API' }).end();
});

router.post('/user',userController.register);

// /api is prefix
app.use('/api', router);

app.listen(port);
console.log('App running on port : ' + port);