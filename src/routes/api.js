const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI, postCreateUser, putUpdateUser, deleteUser} = require("../controllers/apiController")

// Route users
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUser);
routerAPI.put('/users', putUpdateUser);
routerAPI.delete('/users', deleteUser);

module.exports = routerAPI;