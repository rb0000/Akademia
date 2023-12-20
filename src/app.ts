import express, { Express } from 'express';
import { AkademiaServer } from './setupServer';
import databaseConnection from './setupDB';
import { config } from './config';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: AkademiaServer = new AkademiaServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
