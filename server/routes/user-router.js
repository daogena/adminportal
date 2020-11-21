const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createLogin)
router.post('/user/login', UserCtrl.login);
router.put('/user/:id', UserCtrl.updateLogin)
router.delete('/user/:id', UserCtrl.deleteLogin)
router.get('/user/:id', UserCtrl.getLoginById)
router.get('/user', UserCtrl.getLogin)


module.exports = router