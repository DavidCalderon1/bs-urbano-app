import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre = "David"
	constructor(public navCtrl: NavController, public auth: AuthProvider) {
  }

 
	openPage(page: string) {
		this.navCtrl.push(page);
	} 


}
