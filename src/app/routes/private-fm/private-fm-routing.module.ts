import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateFMComponent } from './private-fm.component';


const routes: Routes = [
  { path: '', component: PrivateFMComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateFMRoutingModule { }
