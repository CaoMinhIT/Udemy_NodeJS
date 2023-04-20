const express = require('express');
const router = express.Router();
const {getHomepage, getABC, getData, postCreateUser, 
        getCreatePage, getUpdatePage, postUpdateUser,
        postDeleteUser, postRemove } = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/hello', getABC )
router.get('/data', getData)

router.get('/create', getCreatePage)
router.post('/create-user',postCreateUser)


router.get('/update/:id', getUpdatePage)
router.post('/update-user',postUpdateUser)


router.post('/delete-user/:id',postDeleteUser)
router.post('/delete-user',postRemove)

module.exports = router;