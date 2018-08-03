var express = require('express')
var proxy = require('express-http-proxy');
var app = express()

app.set('trust proxy', true);

app.set('port', (process.env.PORT || 5000))
app.use(proxy('http://fese.win',{
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
      delete proxyReqOpts.headers['X-Forwarded-For'];
      return proxyReqOpts;
    }
  })
);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
