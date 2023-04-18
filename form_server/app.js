const fs = require('fs');
const express = require('express');
const path= require('path');
const app = express();
const cors = require('cors')
const formRouter = require('./router/formRouter')
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));


// serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit:'10kb'})); //can take data upto 10kb
app.use(cors());

app.use(express.urlencoded({extended: true,limit: '10kb'}))// it is used to take input from the form itself without involving the APIs

app.use('/api/v1/submitForm',formRouter);


module.exports = app;