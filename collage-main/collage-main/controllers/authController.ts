import { Request, Response, NextFunction } from 'express';
import { authRegister, authLogin } from '../services/authService.js';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
import dotenv from "dotenv"

dotenv.config();

const JWT_SECRET:string = process.env.JWT_SECRET || "default_secret";

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user: User = req.body;
    const createUser: User = await authRegister(user);
    res.json({ createUser });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { fullName, password } = req.body;
    const user = await authLogin(fullName, password);
    if (user) {
      const token = jwt.sign({ id: user.id, fullName: user.fullName }, JWT_SECRET, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true ,  maxAge: 3600000 } );
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    next(error);
  }
};