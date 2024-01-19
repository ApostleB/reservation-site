// import { User } from '../models/user';
// 가상의 사용자 데이터
  
  // 모든 사용자 목록을 가져오는 메서드
  export const getAllUsers = async () => {
    
    try{
      // const users:any = await User.findOne({ where: {id:1}})
      const users:any = await User.findAll()
      if(users !== null){
        console.log("Executing : ",users[0].User); // true
      }
      
      return "test";
    }catch(e){
      return "error"
    }
  };
  
  // 특정 사용자의 정보를 가져오는 메서드
  export const getUserById = (userId: number) => {
    return "test";
  };


  export const getTest = async () => {

    return "users";
  };