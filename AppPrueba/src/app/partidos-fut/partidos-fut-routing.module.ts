import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartidosFutPage } from './partidos-fut.page';

const routes: Routes = [
  {
    path: '',
    component: PartidosFutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidosFutPageRoutingModule {}
