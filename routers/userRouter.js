const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const isAuthenticated = require('../middleware/authenticate');

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', isAuthenticated, userController.createUser);
userRouter.put('/:id', isAuthenticated, userController.updateUser);
userRouter.delete('/:id', isAuthenticated, userController.deleteUser);

module.exports = userRouter;