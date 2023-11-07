import express, {Request, Response, NextFunction}from 'express';
import userRoutes from './userRoutes'; // 예시: 사용자 라우트
const router = express.Router();

router.use("/users", userRoutes);

export default router;
