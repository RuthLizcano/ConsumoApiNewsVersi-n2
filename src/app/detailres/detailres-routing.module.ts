import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailresPage } from './detailres.page';

const routes: Routes = [
  {
    path: '',
    component: DetailresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailresPageRoutingModule {}
