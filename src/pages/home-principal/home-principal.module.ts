import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePrincipalPage } from './home-principal';

@NgModule({
  declarations: [
    HomePrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePrincipalPage),
  ],
})
export class HomePrincipalPageModule {}
