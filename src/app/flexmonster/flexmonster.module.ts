import { NgModule } from '@angular/core';
import { FlexmonsterComponent } from './flexmonster.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FlexmonsterComponent],
  imports: [
    SharedModule,
  ]
})
export class FlexmonsterModule { }
