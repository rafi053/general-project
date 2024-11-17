var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { findUserById } from "../DAL/data.js";
export const userLogin = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserById(id);
    return user;
});
export const userGrades = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserById(id);
    if (!user) {
        return null;
    }
    const grades = user.grades;
    return grades;
});
export const userGradesAverage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const grades = yield userGrades(id);
    if (!grades) {
        return null;
    }
    const gradesAverage = grades.reduce((a, b) => a + b.grade, 0) / grades.length;
    return gradesAverage;
});
