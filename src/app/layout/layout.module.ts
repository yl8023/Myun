import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { AudioBtnComponent } from './components/audio-btn/audio-btn.component';
import { AudioSliderComponent } from './components/audio-slider/audio-slider.component';
import { AudioVolumeComponent } from './components/audio-volume/audio-volume.component';
import { PlayModeComponent } from './components/play-mode/play-mode.component';
import { PlayListComponent } from './components/play-list/play-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    AudioBtnComponent,
    AudioSliderComponent,
    AudioVolumeComponent,
    PlayModeComponent,
    PlayListComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
