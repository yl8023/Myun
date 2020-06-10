import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  { 
    path: 'lay', component: LayoutComponent,
    children:
    [
      { path: 'find', loadChildren: () => import('../routes/find/find.module').then(m => m.FindModule) },
      { path: 'friends', loadChildren: () => import('../routes/friends/friends.module').then(m => m.FriendsModule) },
      { path: 'look-live', loadChildren: () => import('../routes/look-live/look-live.module').then(m => m.LookLiveModule) },
      { path: 'private-fm', loadChildren: () => import('../routes/private-fm/private-fm.module').then(m => m.PrivateFMModule) },
      { path: 'video', loadChildren: () => import('../routes/video/video.module').then(m => m.VideoModule) },
      { path: 'cloud-music', loadChildren: () => import('../routes/cloud-music/cloud-music.module').then(m => m.CloudMusicModule) },
      { path: 'download-music', loadChildren: () => import('../routes/download-music/download-music.module').then(m => m.DownloadMusicModule) },
      { path: 'local-music', loadChildren: () => import('../routes/local-music/local-music.module').then(m => m.LocalMusicModule) },
      { path: 'my-collection', loadChildren: () => import('../routes/my-collection/my-collection.module').then(m => m.MyCollectionModule) },
    ]
  },
  
  {
    path: '', redirectTo: '/lay/find', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
