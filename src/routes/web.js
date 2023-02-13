const { Router } = require('express');
const express = require('express');
const router = express.Router();

const {getHomepage} = require('../controllers/homeController')
const {getABC} = require('../controllers/homeController')
const {getData} = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/hello', getABC )
router.get('/data', getData)

module.exports = router;