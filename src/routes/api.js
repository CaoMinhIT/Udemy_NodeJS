const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI, postCreateUser, putUpdateUser} = require("../controllers/apiController")

// Route users
routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUser)
routerAPI.put('/users', putUpdateUser)

module.exports = routerAPI;