import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebrationsPageRoutingModule } from './celebrations-routing.module';

import { CelebrationsPage } from './celebrations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrationsPageRoutingModule
  ],
  declarations: [CelebrationsPage]
})
export class CelebrationsPageModule {}
