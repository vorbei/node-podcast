
// Add uncaught-exception handler in prod-like environments
if (geddy.config.environment != 'development') {
  process.addListener('uncaughtException', function (err) {
    var msg = err.message;
    if (err.stack) {
      msg += '\n' + err.stack;
    }
    if (!msg) {
      msg = JSON.stringify(err);
    }
    geddy.log.error(msg);
  });
}

geddy.podcasts = [];
geddy.model.adapter = {};
geddy.model.adapter.Podcast = require( process.cwd() + '/lib/model_adapters/podcast' ).Podcast;
