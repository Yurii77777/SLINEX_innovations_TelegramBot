import bodyParser = require('body-parser');
const path = require('path');
import express = require('express');

import { APILogger } from './logger/api.logger';
import { UserController } from './controller/user.controller';
import { FeedbackController } from './controller/feedback.controller';
import { MeController } from './controller/me.controller';
import { CommentController } from './controller/comment.controller';
import { ClientController } from './controller/client.controller';
import { TelegramService } from './service/telegram.service/telegram.service';
import { loginValidator, regularRegisterValidator, socialValidator } from './validator/authValidator';
import validate from './validator/validate';
import handleResponse from './constants/response';
import cors = require('cors');
import { TemplateController } from './controller/qrtemplate.controller';
import { QrController } from './controller/qr.controller';
import authToken from './utils/token';
import { qrIdValidator } from './validator/qrValidator';

//start loading mock data
// NOTE: Pls uncomment the import and runFixture() code below, save and run only once
// to load appropriate data into the database
//PLS Uncomment back after you have seen  "Data Imported" in the console

// import { runFixture } from "./constants/mock";
// runFixture();

//end mock data

class App {
  public express: express.Application;
  public logger: APILogger;
  public userController: UserController;
  public templateController: TemplateController;
  public qrController: QrController;
  public feedbackController: FeedbackController;
  public commentController: CommentController;
  public meController: MeController;
  public clientController: ClientController;
  public telegramService: TelegramService;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new APILogger();
    this.userController = new UserController();
    this.templateController = new TemplateController();
    this.qrController = new QrController();
    this.feedbackController = new FeedbackController();
    this.commentController = new CommentController();
    this.meController = new MeController();
    this.clientController = new ClientController();
    this.telegramService = new TelegramService();
    this.telegramService.handleBotEvents();
  }

  // Configure Express middleware.
  private middleware(): void {
    const corsOptions = {
      origin: '*',
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    };

    this.express.use(cors(corsOptions));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // For AWS Beanstalk health check:
    this.express.get('/eb-healthcheck', (req, res, next) => {
      res.send('Ok!');
    });

    this.express.post('/api/user/create', regularRegisterValidator, validate, (req, res, next) => {
      this.userController.createUser(req, res, next);
    });

    this.express.post('/api/user/google/login', socialValidator, validate, (req, res, next) => {
      this.userController.socialLoginGoogle(req, res, next);
    });

    this.express.post('/api/user/facebook/login', socialValidator, validate, (req, res, next) => {
      this.userController.socialLoginFacebbok(req, res, next);
    });

    this.express.get('/api/templates', authToken, (req, res, next) => {
      this.templateController.getTemplates(req, res, next);
    });

    this.express.get('/api/qrs', authToken, (req, res, next) => {
      this.qrController.getQrs(req, res, next);
    });

    this.express.get('/api/qr/:id', authToken, qrIdValidator, validate, (req, res, next) => {
      this.qrController.getAQr(req, res, next);
    });

    this.express.delete('/api/qrs/:id', authToken, qrIdValidator, validate, (req, res, next) => {
      this.qrController.deleteQr(req, res, next);
    });

    this.express.post('/api/qr/create', authToken, (req, res, next) => {
      this.qrController.createQr(req, res, next);
    });

    this.express.put('/api/qr/update/:id', authToken, qrIdValidator, validate, (req, res, next) => {
      this.qrController.updateQr(req, res, next);
    });

    this.express.get('/api/qr/:id/duplicate', authToken, qrIdValidator, validate, (req, res, next) => {
      this.qrController.duplicateAQr(req, res, next);
    });

    this.express.post('/api/user/create', regularRegisterValidator, validate, (req, res, next) => {
      this.userController.createUser(req, res, next);
    });

    this.express.post('/api/user/google/login', socialValidator, validate, (req, res, next) => {
      this.userController.socialLoginGoogle(req, res, next);
    });

    this.express.post('/api/user/facebook/login', socialValidator, validate, (req, res, next) => {
      this.userController.socialLoginFacebbok(req, res, next);
    });

    this.express.post('/api/user/login', loginValidator, validate, (req, res, next) => {
      this.userController.login(req, res, next);
    });

    this.express.post('/api/client', (req, res) => {
      this.clientController.createClient(req.body).then((data) => res.json(data));
    });

    this.express.post('/api/feedback', (req, res) => {
      this.feedbackController.createFeedback(req.body).then((data) => res.json(data));
    });

    this.express.get('/api/feedbacks', authToken, (req, res, next) => {
      this.feedbackController.getFeedbacks(req, res, next);
    });

    this.express.get('/api/comments', authToken, (req, res, next) => {
      this.commentController.getComments(req, res, next);
    });

    this.express.post('/api/comment', authToken, (req, res, next) => {
      this.commentController.handleComment(req, res, next);
    });

    this.express.get('/api/me', authToken, (req, res, next) => {
      this.meController.getMe(req, res, next);
    });

    //global error handler
    this.express.use((error, req, res, next) => {
      this.logger.error(error);
      return handleResponse(res, 500, error.statusMessage, undefined, error);
    });

    // handle undefined routes
    this.express.use('*', (req, res, next) => {
      res.status(404).send('Not found');
    });
  }
}

export default new App().express;
