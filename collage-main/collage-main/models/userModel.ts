import  { Document } from 'mongoose';

export interface User extends Document{
    fullName: string;
    passportId: number;
    password: string;
    grades: Grades[];
    role: string;
  }
  
  export interface Grades {
    subject: string;
    grade: number;
  }
  