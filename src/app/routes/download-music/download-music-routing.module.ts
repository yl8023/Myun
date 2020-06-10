import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadMusicComponent } from './download-music.component';


const routes: Routes = [
  {
    path: '', component: DownloadMusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadMusicRoutingModule { }
