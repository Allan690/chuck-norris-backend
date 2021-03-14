import cors from 'cors';
import express, { Application } from 'express';
import startServer from './server';

const app: Application = express();
app.use(cors());
startServer(app);
