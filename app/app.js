var express = require('express');
var morgan = require('morgan');
var swig = require('swig');
var compression = require('compression');

var app = express();

//swig.init({allowErrors: true, cache: false});

console.log('mode: ', process.env.NODE_ENV);

if ('development' === process.env.NODE_ENV) {

    swig.setDefaults({ cache: false });
    app
    .set('view cache', false)
    .disable('view cache')
    .use(require('connect-livereload')({ port: 35729 }));

} else if ('production' === process.env.NODE_ENV){
    app.use(compression());
}


app
//.use(morgan('combined'))
.engine('html', swig.renderFile)
.set('view engine', 'html')
.set('views', __dirname+'/../front/templates')
.get('/', function (req, res) {
    res.render('connect.html', {title: 'ok'});
})
.use(express.static(__dirname+'/../front/static'));
// .use('/partials', express.static(__dirname+'/../views/partials'));

var port = process.env.PORT || 8080;
var server = app.listen(port, function (req, res) {
    console.log('listening on http://localhost:'+server.address().port);
});
