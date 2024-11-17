var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userGrades, userGradesAverage } from "../services/userService.js";
export const grades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        const usersGrades = yield userGrades(studentId);
        res.status(201).json({ usersGrades });
    }
    catch (error) {
        console.error("Error adding grade to user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});
export const gradeAverage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        const usersGradesAverage = yield userGradesAverage(studentId);
        res.status(201).json({ usersGradesAverage });
    }
    catch (error) {
        console.error("Error getting grades for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});
