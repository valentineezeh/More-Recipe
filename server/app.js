import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

//Set up the express app
const app = express();

//Log requests to the console
app.use(logger('dev'));

//Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: fasle})));

//Setup a default catch-all route that
