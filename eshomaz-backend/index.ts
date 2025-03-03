import { Request, Response } from 'express';
import { connectDB } from './config/db';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

import UserRoutes from './routes/user-routes';
import PostsRoutes from './routes/post-routes';

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use('/users', UserRoutes);
app.use('/posts', PostsRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello eShomaz');
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`node server running on port ${PORT}`);
    });
});