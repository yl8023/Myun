import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookLiveComponent } from './look-live.component';

const routes: Routes = [
  {
    path: '', component: LookLiveComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookLiveRoutingModule { }
