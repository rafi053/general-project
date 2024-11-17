var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TeacherAddGrade, removeTeacherGrade, editTeacherGrade, teacherGetUsers, teacherGetUserGrades, teacherGetUserGradesAverage, teacherdeleteUser } from "../services/teacherService.js";
export const addGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        const grade = req.body;
        if (!grade) {
            res.status(400).json({ error: "Student  grade is required." });
            return;
        }
        const user = yield TeacherAddGrade(studentId, grade);
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
});
export const removeGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        const subject = req.body;
        const user = yield removeTeacherGrade(studentId, subject);
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
});
export const editGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        const grade = req.body;
        const user = yield editTeacherGrade(studentId, grade);
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
});
export const users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield teacherGetUsers();
        res.status(201).json({ users });
    }
    catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});
export const userGrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        const usersGrades = yield teacherGetUserGrades(studentId);
        res.status(201).json({ usersGrades });
    }
    catch (error) {
        console.error("Error adding grade to user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});
export const usersGradeAverage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        const usersGradesAverage = yield teacherGetUserGradesAverage(studentId);
        res.status(201).json({ usersGradesAverage });
    }
    catch (error) {
        console.error("Error getting grades for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});
export const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        const user = yield teacherdeleteUser(studentId);
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
});
