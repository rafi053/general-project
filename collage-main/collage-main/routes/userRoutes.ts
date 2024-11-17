import express, { Router } from 'express';
import { grades, gradeAverage } from '../controllers/userController.js';

import { studentMiddleware } from "../middlewares/studentMiddleware.js";



const router: Router = express.Router();
router.use(studentMiddleware as any);

router.route('/grades').get(grades);
router.route('/gradesAverage').get(gradeAverage);


export default router;