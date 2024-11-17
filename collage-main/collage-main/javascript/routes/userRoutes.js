import express from 'express';
import { grades, gradeAverage } from '../controllers/userController.js';
import { studentMiddleware } from "../middlewares/studentMiddleware.js";
const router = express.Router();
router.use(studentMiddleware);
router.route('/grades').get(grades);
router.route('/gradesAverage').get(gradeAverage);
export default router;
