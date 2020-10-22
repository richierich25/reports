import { NgModule } from '@angular/core';
import { KendoUiComponent } from './kendo-ui.component';
import { SharedModule } from '../shared/shared.module';

import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [KendoUiComponent, ExcelExportComponent, GridComponent],
  imports: [
    SharedModule,
    ExcelExportModule,
    BrowserAnimationsModule,
  ]
})
export class KendoUiModule { }
