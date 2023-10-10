const express = require('express');
const userController = require('../controllers/user');

const app = express.Router();


app.get('/users', userController.index);