// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import UserController from './user.controller.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';

// 2. Initialize Express Router.
const userRouter = express.Router();

const userController = new UserController();

// All the paths to controllers methods
// localhost/api/users
userRouter.post('/signup', (req, res) => {
  userController.signUp(req, res);
});
userRouter.post('/signin', (req, res) => {
  userController.signIn(req, res);
});
userRouter.put('/resetPassword', jwtAuth, (req, res, next) => {
  userController.resetPassword(req, res, next);
});

export default userRouter;
