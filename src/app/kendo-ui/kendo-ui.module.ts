import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoUiComponent } from './kendo-ui.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [KendoUiComponent],
  imports: [
    SharedModule,
  ]
})
export class KendoUiModule { }
