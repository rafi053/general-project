var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { findUserById, addGrade, delateGrade, editGrade, getAllUsers, deleteUser } from "../DAL/data.js";
export const teacherLogin = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserById(id);
    return user;
});
export const TeacherAddGrade = (studentId, grade) => __awaiter(void 0, void 0, void 0, function* () {
    const userUpdate = yield addGrade(studentId, grade);
    return userUpdate;
});
export const removeTeacherGrade = (studentId, subject) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield delateGrade(studentId, subject);
    return user;
});
export const editTeacherGrade = (studentId, grade) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield editGrade(studentId, grade);
    return user;
});
export const teacherGetUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getAllUsers();
    return users;
});
export const teacherGetUserGrades = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserById(id);
    if (!user) {
        return null;
    }
    const grades = user.grades;
    return grades;
});
export const teacherGetUserGradesAverage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const grades = yield teacherGetUserGrades(id);
    if (!grades) {
        return null;
    }
    const gradesAverage = grades.reduce((a, b) => a + b.grade, 0) / grades.length;
    return gradesAverage;
});
export const teacherdeleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield deleteUser(id);
    return users;
});
