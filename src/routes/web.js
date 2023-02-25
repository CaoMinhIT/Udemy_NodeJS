const { Router } = require('express');
const express = require('express');
const router = express.Router();

const {getHomepage} = require('../controllers/homeController')
const {getABC} = require('../controllers/homeController')
const {getData} = require('../controllers/homeController')
const {postCreateUser} = require('../controllers/homeController')
const {getCreatePage} = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/hello', getABC )
router.get('/data', getData)

router.post('/create-user',postCreateUser)
router.get('/create', getCreatePage)

module.exports = router;