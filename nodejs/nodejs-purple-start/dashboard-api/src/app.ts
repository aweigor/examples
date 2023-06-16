import express, { Express } from 'express';
import { userRouter } from './users/users';
import { Server } from 'node:http';
import { LoggerService } from './logger/logger.service';


export class App {
  app: Express;
  server?: Server;
  port: number;
  logger: LoggerService;
  
  constructor(logger: LoggerService) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
  }

  useRoutes() {
    this.app.use('/users', userRouter);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    console.log(`Server is running on http://localhost:${this.port}`);
  }
}