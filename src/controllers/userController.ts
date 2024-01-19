// import { Request, Response } from 'express';
// import * as userService from '../services/userService'; // 사용자 서비스를 가져옵니다.

// // 모든 사용자 목록을 가져오는 컨트롤러 메서드
// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     // 사용자 서비스를 호출하여 사용자 목록을 가져옵니다.
//     console.log("1");
//     const users = await userService.getAllUsers();

//     // 사용자 목록을 클라이언트에 응답
//     console.log(users)
//     res.json(users);
//   } catch (error) {
//     // 오류 처리
//     res.status(500).json({ error: '사용자 목록을 가져오는 중에 오류가 발생했습니다.'+error });
//   }
// };
