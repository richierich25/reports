import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexmonsterComponent } from './flexmonster.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FlexmonsterComponent],
  imports: [
    SharedModule,
  ]
})
export class FlexmonsterModule { }
