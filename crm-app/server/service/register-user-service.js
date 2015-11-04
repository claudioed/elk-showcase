/**
 * Created by Claudio E. de Oliveira<claudioed.oliveira@gmail.com> on 03/11/15.
 */
var logger = require('./../logger/logger');

exports.registerNewUser = function(user){
  logger.info(user,'New User Registration');
};

