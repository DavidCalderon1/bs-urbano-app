import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { SubjectsPage } from '../pages/subjects/subjects';
import { SubjectShowPage } from '../pages/subject-show/subject-show';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { SuggestionServiceProvider } from '../providers/suggestion-service/suggestion-service';


// Logging Services
import { LoggerService } from '../services/log4ts/logger.service';
import { ConsoleLoggerService } from '../services/log4ts/console-logger.service';


import { AuthProvider } from '../providers/auth/auth';
import { ApiRequestProvider } from '../providers/api-request/api-request';
import { RestApiProvider } from '../providers/rest-api/rest-api';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    ListPage,
    SuggestionPage,
    SubjectsPage,
    SubjectShowPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: SignInPage, name: 'SignInPage', segment: 'sign-in' },
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,        
    LoginPage,
    ListPage,
    SuggestionPage,
    SubjectsPage,
    SubjectShowPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LoggerService, useClass: ConsoleLoggerService},
    SuggestionServiceProvider,
    AuthProvider,
    ApiRequestProvider,
    RestApiProvider
  ]
})
export class AppModule {}
