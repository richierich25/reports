import { NgModule } from '@angular/core';
import { KendoUiComponent } from './kendo-ui.component';
import { SharedModule } from '../shared/shared.module';

import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, ExcelModule  } from '@progress/kendo-angular-grid';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { GridComponent } from './grid/grid.component';
import { GridExcelExportComponent } from './grid-excel-export/grid-excel-export.component';
import { GridPdfExportComponent } from './grid-pdf-export/grid-pdf-export.component';


@NgModule({
  declarations: [KendoUiComponent, ExcelExportComponent, GridComponent, GridExcelExportComponent, GridPdfExportComponent],
  imports: [
    SharedModule,
    ExcelExportModule,
    BrowserAnimationsModule,
    GridModule,
    ExcelModule,
  ]
})
export class KendoUiModule { }
