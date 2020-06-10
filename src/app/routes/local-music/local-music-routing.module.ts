import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalMusicComponent } from './local-music.component';


const routes: Routes = [
  {
    path: '', component: LocalMusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalMusicRoutingModule { }
