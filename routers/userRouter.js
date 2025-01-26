const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser);

module.exports = userRouter;