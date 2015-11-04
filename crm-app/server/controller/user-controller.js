/**
 * Created by Claudio E. de Oliveira<claudioed.oliveira@gmail.com> on 03/11/15.
 */
'use strict';

var userService = require('./../service/register-user-service');

/**
 * Register new user
 * */
exports.register = function(req,res,next){
    userService.registerNewUser(req.body);
    res.status(200).end();
};