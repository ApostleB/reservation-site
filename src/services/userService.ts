import { User } from "../entities/user";
import { myDataSource } from "../data-source";

// 가상의 사용자 데이터
const users = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    // ...
  ];
  
  // 모든 사용자 목록을 가져오는 메서드
  export const getAllUsers = () => {
    console.log("UserService")
    return users;
  };
  
  // 특정 사용자의 정보를 가져오는 메서드
  export const getUserById = (userId: number) => {
    return users.find((user) => user.id === userId);
  };


  export const getTest = async () => {
    try{
      myDataSource
      .initialize()
      .then(() => {
          console.log("Data Source has been initialized!")
      })
      .catch((err) => {
          console.error("Error during Data Source initialization:", err)
      })
    }catch(e){
      console.log(e)
    }

    return "users";
  };