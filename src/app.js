import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import delay from 'express-delay';
import { resolve } from 'path';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'https://api.davinne.dev',
  'http://localhost:3000',
  'https://react.davinne.dev',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

import './database';

dotenv.config();
class App {
  constructor() {
    this.app = express();
    this.middleswares();
    this.routes();
  }

  middleswares() {
    this.app.use(cors(corsOptions));
    this.app.use(
      helmet({
        crossOriginResourcePolicy: { policy: 'cross-origin' }, // Permite carregar recursos de origens diferentes
      }),
    );
    this.app.use(delay(2000));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', cors(corsOptions), (req, res, next) => {
      res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
      next();
    }, express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photos/', fotoRoutes);
  }
}

export default new App().app;
