// Middleware for Application
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import cors from 'cors';
var path=require('path');
import helmet from 'helmet';
import cookieparser from 'cookie-parser';
import morgan from 'morgan';
import CsrfMiddleware from './global/middlewares/csrfMidlleware';
import EmptyContentMiddleware from './global/middlewares/EmptyContent';
import ContentTypeMiddleware from './global/middlewares/ContentType';
import configServer from '../config';
import express from 'express';
import passport from 'passport';
import expressvalidator from 'express-validator';
import flash from 'flash';
import users from './models/Users';
// const Filestore = sessionStore(expressSession);

const middleware = (app) => {
  app.set('port', process.env.PORT || configServer.app.PORT);
  // adding security fixes
  app.disable('x-powered-by');
  app.use(helmet());
  app.use(
    helmet.noCache({
      noEtag: true,
    }),
  ); // set Cache-Control header
  app.use(helmet.noSniff()); // set X-Content-Type-Options header
  app.use(helmet.frameguard()); // set X-Frame-Options header
  app.use(helmet.xssFilter()); // set X-XSS-Protection header
  app.enable('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
  app.use(
    cors(),
  );

  app.use(
    expressSession({
      name: 'SESS_ID',
      secret: configServer.app.SESSION_SECRET,
      // store: new Filestore({ path: './sessions' }),
      resave: true,
      saveUninitialized: false,
    }),
  );

  app.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  ); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json
  /**
   * enable CORS support. // Cross-Origin Request Support
   */
  // register all custom Middleware
//  app.use(ContentTypeMiddleware);
  app.use(EmptyContentMiddleware);
  app.use(CsrfMiddleware);
app.set('views',path.join(__dirname,'views'));



app.engine('handlebars',require('exphbs'));
app.set('view engine','handlebars');

app.use(cookieparser());

app.use(express.static(path.join(__dirname,'public')));

app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

app.use(function(req,res,next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user=req.user||null;
  next();
});



};



export default middleware;
