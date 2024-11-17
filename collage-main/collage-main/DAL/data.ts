import { Grades, User } from "../models/userModel.js";
import  USER from "../schemas/userSchema.js";
import { UpdateResult } from "mongodb";


export const createUser = async (user:User): Promise<User> => {
        const userToAdd: User = await USER.create(user);
        return userToAdd;
};

export const findUserById = async (id: string): Promise<User | null> => {
        const userFind: User | null = await USER.findById({ _id: id });
        return userFind;
};

export const findUserByFullNameAndPassword = async (fullName: string, password: string): Promise<User | null> => {
        const userFind: User | null = await USER.findOne({ fullName: fullName, password: password });
        return userFind;
}


export const getAllUsers = async (): Promise<User[] | null> => {
        const users: User[] | null = await USER.find();
        return users;
};

export const delateGrade = async (id: string, subject:string): Promise<User | null> => {
        const gradeToDelete: UpdateResult<Document> = await USER.updateOne({ _id: id } ,{$Pull: {grades: {subject: subject}}});
        const user: User | null = await USER.findById({ _id: id });
        return user;
};


export const editGrade = async (id: string, grade:Grades): Promise<User | null> => {
        const userToAdd: UpdateResult<Document> = await USER.updateOne({ _id: id } ,{$set: {grades: grade}});
        const user: User | null = await USER.findById({ _id: id });
        return user;
};


export const addGrade = async (id: string, grade:Grades): Promise<User | null> => {
        const gradeToAdd: UpdateResult<Document> = await USER.updateOne({ _id: id } ,{$push: {grades: grade}});
        const user: User | null = await USER.findById({ _id: id });
        return user;
};



export const deleteUser = async (id: string): Promise<User[] | null> => {
        await USER.deleteOne({ _id: id });
        const users: User[] | null = await USER.find();
        return users;
};