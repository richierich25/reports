import { NgModule } from '@angular/core';

import { WebdatarocksComponent } from './webdatarocks.component';
import { SharedModule } from '../shared/shared.module';
import { WbrPivotTableComponent } from './wbr-pivot-table/wbr-pivot-table.component';
import { WdrComponent } from './wdr/wdr.component';



@NgModule({
  declarations: [WebdatarocksComponent, WbrPivotTableComponent, WdrComponent],
  imports: [
    SharedModule,
  ]
})
export class WebdatarocksModule { }
