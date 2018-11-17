import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  	private username: string;
  	private password: string;
  
	loading = false;
	submitted = false;
	returnUrl: string;
	error = '';

	constructor(
	    public auth: AuthProvider,
			public navCtrl: NavController,
			public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	submitlogin(){
		this.submitted = true;
		this.loading = true;
		
		this.auth.login({email: this.username, password: this.password})
			.subscribe(
				data => { 
				  this.error = '';
					this.redirectToHome() },
				error => {
					this.error = error.error.error;
					this.loading = false;
				}
			)
	}

	redirectToHome() {
		this.navCtrl.push(HomePage);
	}
}
