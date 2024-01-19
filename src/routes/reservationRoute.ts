import express, { NextFunction, Request, Response } from 'express';
import * as reservationController from '../controllers/reservationController'; // 사용자 컨트롤러를 가져옵니다.

const reservationRoute = express.Router();

reservationRoute.get('*', (req:Request, res:Response, next:NextFunction) => {
  console.log("userRoutes")
  next();
})

reservationRoute.get('*', reservationController.home);


export default reservationRoute;
