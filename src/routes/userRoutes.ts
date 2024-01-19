import express, { NextFunction, Request, Response } from 'express';
// import * as userController from '../controllers/userController'; // 사용자 컨트롤러를 가져옵니다.

const userRoutes = express.Router();

// GET: /users - 모든 사용자 목록을 가져옵니다.
userRoutes.use('*', (req:Request, res:Response, next:NextFunction) => {
  console.log("userRoutes")
  next();
})

// userRoutes.get('/', userController.getAllUsers);



export default userRoutes;
