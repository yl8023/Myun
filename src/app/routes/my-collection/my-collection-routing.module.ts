import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCollectionComponent } from './my-collection.component';


const routes: Routes = [
  {
    path: '', component: MyCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCollectionRoutingModule { }
