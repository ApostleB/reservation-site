import express, {Request, Response }from 'express';
// import userRoutes from './userRoutes'; // 예시: 사용자 라우트
import reservationRoute from "./reservationRoute"
const router = express.Router();

// router.use("/users", userRoutes);
router.use("/reservation", reservationRoute);

export default router;
