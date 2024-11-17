import express from 'express';
import { addGrade, removeGrade, editGrade, users, userGrades, usersGradeAverage, deleteUser } from '../controllers/teacherController.js';
import { teacherMiddleware } from "../middlewares/teacherMiddleware.js";
const router = express.Router();
// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     summary: Get all tags
//  *     responses:
//  *       200:
//  *         description: The list of tags
// */
// /**
//  * @swagger
//  * /teachers/addGrade/:id:
//  *   put:
//  *     summary: Add grade
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         - in: body
//  *           name: grade
//  *           schema:
//  *             type: object
//  *             properties:
//  *               subject:
//  *                 type: string
//  *               grade:
//  *                 type: number
//  *     responses:
//  *       200:
//  *         description: The list of tags
//  *       400:
//  *         description: The list of tags
//  *       404:
//  *         description: The list of tags
//  *       500:
//  *         description: The list of tags
//  *   delete:
//  *     summary: Remove grade
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: The list of tags
//  *       400:
//  *         description: The list of tags
//  *       404:
//  *         description: The list of tags
//  *       500:
//  *         description: The list of tags
//  *   put:
//  *     summary: Edit grade
//  *     parameters:
//  *  
//  *     responses:
//  *       200:
//  *         description: The list of tags
//  *       400:
//  *         description: The list of tags
//  *       404:
//  *         description: The list of tags
//  *       500:
//  *         description: The list of tags
//  *   delete:
//  *     summary: Delete user
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: The list of tags
//  *       400:
//  *         description: The list of tags
//  *       404:
//  *         description: The list of tags
//  *       500:
//  *         description: The list of tags
//  *   
// */
// /**
//  * @swagger
//  * /teachers/usersGradesAverage/:id:
//  *   get:
//  *     summary: Get average grade
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: The list of tags
//  *       400:
//  *         description: The list of tags
//  *       404:
//  *         description: The list of tags
//  *       500:
//  *         description: The list of tags
//  *   
// */
// /**
//  * @swagger
//  * /teachers/usersGrades/:id:
//  *   get:
//  *     summary: Get user grades
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: The list of tags
//  *       400:
//  *         description: The list of tags
//  *       404:
//  *         description: The list of tags
//  *       500:
//  *         description: The list of tags
//  *   
// */
// /**
//  * @swagger
//  * /teachers/deleteUser/:id:
//  *   delete:
//  *     summary: Delete user
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: The list of tags
//  *       400:
//  *         description: The list of tags
//  *       404:
//  *         description: The list of tags
//  *       500:
//  *         description: The list of tags
//  *   
// */
router.use(teacherMiddleware);
router.route('/addGrade/:id').put(addGrade);
router.route('/removeGrade/:id').delete(removeGrade);
router.route('/editGrade/:id').put(editGrade);
router.route('/users').get(users);
router.route('/usersGrades/:id').get(userGrades);
router.route('/usersGradesAverage/:id').get(usersGradeAverage);
router.route('/deleteUser/:id').delete(deleteUser);
export default router;
