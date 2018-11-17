import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { RestApiProvider } from '../../providers/rest-api/rest-api';
/**
 * Generated class for the SubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {

	subjects: any;
	error: false;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public api: RestApiProvider, public loadingController: LoadingController) {

  	}

  	ionViewDidLoad() {
  		this.getSubjects();
  		
    	console.log('ionViewDidLoad SubjectsPage');
  	}

  	async getSubjects() {
	  const loading = await this.loadingController.create({
	    content: 'Loading'
	  });
	  await loading.present();
	  await this.api.getSubjects()
	    .subscribe(res => {
	      console.log(res);
	      if (res['error'] != undefined) {
	      	this.error = res['error'];
	      }else{
	      	this.subjects = res;
	      }
	      loading.dismiss();
	    }, err => {
	      console.log(err);
	      loading.dismiss();
	    });
	}

}
