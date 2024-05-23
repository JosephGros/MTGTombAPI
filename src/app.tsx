import express from 'express';
import connectDB from './db/db';
import recomendationrouter from './routes/algoritmRoutes';
import cors from 'cors';

const app = express();
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

connectDB();

app.use(express.json());

app.use('/api', recomendationrouter);

export default app;