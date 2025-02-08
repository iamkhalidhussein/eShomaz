import { Request, Response } from 'express';
import { connectDB } from './config/db';
import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors';

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello eShomaz');
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`node server running on port ${PORT}`);
    });
});