import { Grades, User } from "../models/userModel.js";
import { findUserById } from "../DAL/data.js";

export const userLogin = async (id: string): Promise<User | null> => {
    const user: User | null = await findUserById(id);  
    return user;
  };

  export const userGrades = async (id: string): Promise<Grades[] | null> => {
    const user: User | null = await findUserById(id);
    if (!user) {
        return null;
    }
    const grades: Grades[] | null = user.grades;
    return grades;
  };

  export const userGradesAverage = async (id: string): Promise<number | null> => {
    const grades: Grades[] | null = await userGrades(id);
    if (!grades) {
        return null;
    }
    const gradesAverage: number = grades.reduce((a,b) => a + b.grade,0)/grades.length;  
    return gradesAverage;
  };
