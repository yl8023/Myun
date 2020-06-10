import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { PrivateFMRoutingModule } from './private-fm-routing.module';
import { PrivateFMComponent } from './private-fm.component';


@NgModule({
  declarations: [PrivateFMComponent],
  imports: [
    CommonModule,
    PrivateFMRoutingModule,
    SharedModule
  ]
})
export class PrivateFMModule { }
