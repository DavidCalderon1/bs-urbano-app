import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { SubjectsPage } from '../pages/subjects/subjects';
import { HomePrincipalPage } from '../pages/home-principal/home-principal';
import { TabsPage } from '../pages/tabs/tabs';

import { LoggerService } from '../services/log4ts/logger.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private logger: LoggerService
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Index', component: HomePage },
      { title: 'Registrarse', component: SignInPage },
      { title: 'Inicio Sesión', component: LoginPage },
      { title: 'List', component: ListPage },
      { title: 'Subjects', component: SubjectsPage },
      { title: 'Sugerencias', component: SuggestionPage },
      { title: 'Inicio', component: HomePrincipalPage },
      { title: 'Tab', component: TabsPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
