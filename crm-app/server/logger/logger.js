/**
 * Created by Claudio E. de Oliveira<claudioed.oliveira@gmail.com> on 03/11/15.
 */

var bunyan = require('bunyan');

var log = bunyan.createLogger({
    name: 'crm-app',
    streams: [{
        type: 'rotating-file',
        path: '/var/logs/crm-app.log',
        period: '1d',
        count: 10
    }]
});

var logger = {};

logger.info = function(json,operation){
  log.info(json,operation);
};

module.exports = gitlogger;