const router = require('express').Router()
const UserController = require('../controllers/user')
const taskRouter = require('./task')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)
router.use('/tasks', taskRouter)

module.exports = router