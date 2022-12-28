import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailresPageRoutingModule } from './detailres-routing.module';

import { DetailresPage } from './detailres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailresPageRoutingModule
  ],
  declarations: [DetailresPage]
})
export class DetailresPageModule {}
