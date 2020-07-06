import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './routes/header/header.component';
import { LayComponent } from './routes/lay/lay.component';
import { PlayComponent } from './routes/mv-play/play.component';

const routes: Routes = [
  {
    path: 'base', component: HeaderComponent,
    children:
      [
        {
          path: 'lay', component: LayComponent,
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
              { path: 'user', loadChildren: () => import('../routes/user/user.module').then(m => m.UserModule) },
            ]

        },
        {
          path: 'video-play/:id', component: PlayComponent,
        }
      ]
  },
  {
    path: '', redirectTo: '/base/lay/find', pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
