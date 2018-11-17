import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { RestApiProvider } from '../../providers/rest-api/rest-api';

/**
 * Generated class for the SubjectShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-show',
  templateUrl: 'subject-show.html',
})
export class SubjectShowPage {

  private id: number;
  subject: any = {};

  constructor(public api: RestApiProvider, public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
  	this.id = this.navParams.get('id');
  	this.getSubject();
    console.log('ionViewDidLoad SubjectShowPage');
  }

  async getSubject() {
	  const loading = await this.loadingController.create({
	    content: 'Loading'
	  });
	  await loading.present();
	  await this.api.getSubjectsById(this.id)
	    .subscribe(res => {
	      console.log(res);
	      this.subject = res;
	      loading.dismiss();
	    }, err => {
	      console.log(err);
	      loading.dismiss();
	    });
  }
  async delete(id) {
	  const loading = await this.loadingController.create({
	    content: 'Deleting'
	  });
	  await loading.present();
	  await this.api.deleteSubjects(id)
	    .subscribe(res => {
	      loading.dismiss();
	      this.navCtrl.pop();
	    }, err => {
	      console.log(err);
	      loading.dismiss();
	    });
  }

  async edit(id_edit) {
		// this.navCtrl.push(HomePage);
  }

}
