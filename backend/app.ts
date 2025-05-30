import express, { Request, Response } from 'express';
import { nanoid } from 'nanoid'
import dotenv from 'dotenv';
import { connectToDB } from './src/config/mongo.config';

dotenv.config();
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express + TypeScript!');
});

app.get('/api/create', (req: Request, res: Response) => {
    const url = req.body;
    console.log(url)
    const id = nanoid(7);
    res.json({ id });
});

app.listen(PORT, () => {
    connectToDB()
    console.log(`Server is running on http://localhost:${PORT}`);
});
