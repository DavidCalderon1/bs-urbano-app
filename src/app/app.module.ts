import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SuggestionPage } from '../pages/suggestion/suggestion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { SuggestionServiceProvider } from '../providers/suggestion-service/suggestion-service';

import { SignInPage } from '../pages/sign-in/sign-in';

// Logging Services
import { LoggerService } from '../services/log4ts/logger.service';
import { ConsoleLoggerService } from '../services/log4ts/console-logger.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SuggestionPage,
    SignInPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: SignInPage, name: 'SignInPage', segment: 'sign-in' }
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SuggestionPage,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LoggerService, useClass: ConsoleLoggerService},
    SuggestionServiceProvider
  ]
})
export class AppModule {}
