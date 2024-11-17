var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import USER from "../schemas/userSchema.js";
export const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userToAdd = yield USER.create(user);
    return userToAdd;
});
export const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userFind = yield USER.findById({ _id: id });
    return userFind;
});
export const findUserByFullNameAndPassword = (fullName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userFind = yield USER.findOne({ fullName: fullName, password: password });
    return userFind;
});
export const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield USER.find();
    return users;
});
export const delateGrade = (id, subject) => __awaiter(void 0, void 0, void 0, function* () {
    const gradeToDelete = yield USER.updateOne({ _id: id }, { $Pull: { grades: { subject: subject } } });
    const user = yield USER.findById({ _id: id });
    return user;
});
export const editGrade = (id, grade) => __awaiter(void 0, void 0, void 0, function* () {
    const userToAdd = yield USER.updateOne({ _id: id }, { $set: { grades: grade } });
    const user = yield USER.findById({ _id: id });
    return user;
});
export const addGrade = (id, grade) => __awaiter(void 0, void 0, void 0, function* () {
    const gradeToAdd = yield USER.updateOne({ _id: id }, { $push: { grades: grade } });
    const user = yield USER.findById({ _id: id });
    return user;
});
export const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield USER.deleteOne({ _id: id });
    const users = yield USER.find();
    return users;
});
