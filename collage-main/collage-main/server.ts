import express, { Application } from 'express';
import  authMiddleware  from "./middlewares/authMiddleware.js";
import userRouter from './routes/userRoutes.js'
import teacherRouter from './routes/teacherRoutes.js'
import authRouter from './routes/authRouter.js'
import connectDb from './config/db.js';
import cookieParser from "cookie-parser";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 3000;

const app: Application = express();




connectDb();
app.use(cookieParser())

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", authRouter);

app.use(authMiddleware);
app.use('/teacher', teacherRouter);
app.use('/user', userRouter);



app.listen(PORT, ()=> {console.log(`server listen to port:  ${PORT}`);
});
