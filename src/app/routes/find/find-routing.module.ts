import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindComponent } from './find.component';
import { SongsDetailComponent } from '../songs-detail/songs-detail.component';


const routes: Routes = [
  { path: '', component: FindComponent },
  { path: 'songs-detail/:id', component: SongsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindRoutingModule { }
