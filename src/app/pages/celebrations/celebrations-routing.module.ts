import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelebrationsPage } from './celebrations.page';

const routes: Routes = [
  {
    path: '',
    component: CelebrationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebrationsPageRoutingModule {}
