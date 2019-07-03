const express = require('express');
const createError = require('http-errors');
const path = require('path');

const app = express();

const routes = require('./routes');

app.set('view engine', 'pug');
if(app.get('env')=='development'){
    app.locals.pretty = true
}

app.set('views', path.join(__dirname, './views'));

app.use('/', routes());
app.use(express.static('public'));

app.listen(3000);

module.export = app;