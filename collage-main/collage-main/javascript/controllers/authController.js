var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { authRegister, authLogin } from '../services/authService.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
export const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const createUser = yield authRegister(user);
        res.json({ createUser });
    }
    catch (error) {
        next(error);
    }
});
export const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, password } = req.body;
        const user = yield authLogin(fullName, password);
        if (user) {
            const token = jwt.sign({ id: user.id, fullName: user.fullName }, JWT_SECRET, { expiresIn: '1h' });
            res.cookie('auth', token, { httpOnly: true, maxAge: 3600000 });
            res.json({ token });
        }
        else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    }
    catch (error) {
        next(error);
    }
});
