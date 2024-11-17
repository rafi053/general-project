import { Grades, User } from "../models/userModel.js";
import { findUserById, addGrade, delateGrade, editGrade, getAllUsers, deleteUser} from "../DAL/data.js";

export const teacherLogin = async (id: string): Promise<User | null> => {
    const user: User | null = await findUserById(id);  
    return user;
  };


  export const TeacherAddGrade = async (studentId: string, grade:Grades): Promise<User | null> => {
    const userUpdate: User  | null = await addGrade (studentId, grade);  
    return userUpdate;
  };
        

  export const removeTeacherGrade = async (studentId: string, subject:string): Promise<User | null> => {
    const user: User | null = await delateGrade(studentId,subject);  
    return user;
  };


  export const editTeacherGrade = async (studentId: string, grade:Grades): Promise<User | null> => {
    const user: User | null = await editGrade(studentId,grade);  
    return user;
  };


  export const teacherGetUsers = async (): Promise<User[] | null> => {
    const users: User[] | null = await getAllUsers();  
    return users;
  };


  export const teacherGetUserGrades = async (id: string): Promise<Grades[] | null> => {
    const user: User | null = await findUserById(id);
    if (!user) {
        return null;
    }
    const grades: Grades[] | null = user.grades;
    return grades;
  };



  export const teacherGetUserGradesAverage = async (id: string): Promise<number | null> => {
    const grades: Grades[] | null = await teacherGetUserGrades(id);
    if (!grades) {
        return null;
    }
    const gradesAverage: number = grades.reduce((a,b) => a + b.grade,0)/grades.length;  
    return gradesAverage;
  };



  export const teacherdeleteUser = async (id: string): Promise<User[] | null> => {
    const users: User[] | null = await deleteUser(id);  
    return users;
  };


  