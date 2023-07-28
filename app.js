const express = require('express');
const APP_SERVER = express();

APP_SERVER.use('/mentors',require('./controllers/mentors.controller'));
APP_SERVER.use('/students',require('./controllers/students.controller'));

module.exports = APP_SERVER;