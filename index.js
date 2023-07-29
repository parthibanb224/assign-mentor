const express = require('express');
const HTTP_SERVER = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
console.log(process.env)

HTTP_SERVER.use(cors());
HTTP_SERVER.use(bodyParser.json());
HTTP_SERVER.use(bodyParser.urlencoded({extended:false}));

require('./Database/dbConfig');

const port = 5000;

HTTP_SERVER.listen(port, '0.0.0.0',() => {
    console.log("SERVER RUNNING IN THIS PORT - ",port);
})

HTTP_SERVER.use('/',require('./app'));