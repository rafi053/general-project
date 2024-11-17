import { Request, Response, NextFunction } from 'express';
import { TeacherAddGrade, removeTeacherGrade, editTeacherGrade, teacherGetUsers, teacherGetUserGrades, teacherGetUserGradesAverage, teacherdeleteUser } from "../services/teacherService.js";
import { Grades, User } from '../models/userModel.js';




export const addGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const  grade:Grades = req.body;
        if (!grade) {
            res.status(400).json({ error: "Student  grade is required." });
            return;
        }
        const user = await TeacherAddGrade(studentId, grade);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error adding grade to user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};

export const removeGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const subject: string = req.body;
        const user = await removeTeacherGrade(studentId,subject);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error getting grades for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};

export const editGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const  grade:Grades = req.body;
        const user = await editTeacherGrade(studentId,grade);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error getting students for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};


export const users = async (req: Request, res: Response): Promise<void> => {
    try{
        const users: User[] | null = await teacherGetUsers();
        res.status(201).json({ users });
    }
        
    catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

export const userGrades = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const usersGrades:Grades[] | null = await teacherGetUserGrades(studentId);
        res.status(201).json({ usersGrades });
    }
    catch (error) {
        console.error("Error adding grade to user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};

export const usersGradeAverage = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const usersGradesAverage: number | null = await teacherGetUserGradesAverage(studentId);
        res.status(201).json({ usersGradesAverage });

    }
    catch (error) {
        console.error("Error getting grades for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const user = await teacherdeleteUser(studentId);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error getting students for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};



