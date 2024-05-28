import express from 'express';
import connectDB from './db/db';
import recomendationrouter from './routes/algoritmRoutes';
import cors from 'cors';
import preconRouter from './routes/preconRoutes';
import topComRouter from './routes/topComRoutes';
import topComThemeRouter from './routes/topComThemeRoutes';
import themeRouter from './routes/themeRoutes';
import preconReleaseRouter from './routes/releasePreRoutes';
import deckRouter from './routes/deckRoutes';
import actioWordsRouter from './routes/actionWordsRoute';
import gameMechanicsRouter from './routes/gameMechanicsRoute';

const app = express();
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

connectDB();

app.use(express.json());

// API Routes
app.use('/api', recomendationrouter);
app.use('/api', preconRouter);
app.use('/api', topComRouter);
app.use('/api', topComThemeRouter);
app.use('/api', themeRouter);
app.use('/api', preconReleaseRouter);
app.use('/api', deckRouter);
app.use('/api', actioWordsRouter);
app.use('/api', gameMechanicsRouter);

export default app;