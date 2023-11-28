import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartidosFutPageRoutingModule } from './partidos-fut-routing.module';

import { PartidosFutPage } from './partidos-fut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartidosFutPageRoutingModule
  ],
  declarations: [PartidosFutPage]
})
export class PartidosFutPageModule {}
