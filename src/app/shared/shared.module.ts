import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { SongListComponent } from '../components/song-list/song-list.component';
import { CommentComponent } from '../components/comment/comment.component';
import { ToolsComponent } from '../components/tools-component/tools.component';
import { LyricComponent } from '../components/lyric/lyric.component';

import { PlayCountPipe } from '../pipes/play-count.pipe';
import { ListPipePipe } from '../pipes/list-pipe.pipe';


const MODULES = [
  NgZorroAntdModule,
  LoadingBarRouterModule,
  LoadingBarModule,
  FormsModule,
];

const COMPONENTS = [
  SongListComponent,
  CommentComponent,
  ToolsComponent,
  LyricComponent,
];

const DIRECTIVES = [];

const PIPES = [
  PlayCountPipe,
  ListPipePipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    ...MODULES,
    
  ],
  exports:[
    ...MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
