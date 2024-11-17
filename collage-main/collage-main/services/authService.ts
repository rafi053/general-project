import { User } from "../models/userModel.js";
import { createUser, findUserByFullNameAndPassword } from "../DAL/data.js";

export const authRegister = async (user: User): Promise<User> => {
    const userToAdd: User = await createUser(user);  
    return userToAdd;
  };


export const authLogin = async (fullName: string, password: string): Promise<User | null> => {
    const user: User | null = await findUserByFullNameAndPassword(fullName, password);  
    return user;
  };