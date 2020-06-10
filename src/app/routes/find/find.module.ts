import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { FindRoutingModule } from './find-routing.module';
import { FindComponent } from './find.component';
import { RecommendComponent } from './components/recommend/recommend.component';
import { NZ_CAROUSEL_CUSTOM_STRATEGIES } from 'ng-zorro-antd';

import { FlipStrategy } from './components/flip-strategy';
import { SongsComponent } from './components/songs/songs.component';
import { TabsSelectComponent } from './components/tabs-select/tabs-select.component';
import { SongsDetailComponent } from '../songs-detail/songs-detail.component';


@NgModule({
  declarations: [
    FindComponent, 
    RecommendComponent, 
    SongsComponent, 
    TabsSelectComponent,
    SongsDetailComponent],
  imports: [
    CommonModule,
    FindRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: NZ_CAROUSEL_CUSTOM_STRATEGIES,
      useValue: [
        {
          name: 'flip',
          strategy: FlipStrategy
        }
      ]
    }
  ],
})
export class FindModule { }
