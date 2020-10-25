import { NgModule } from '@angular/core';
import { KendoUiComponent } from './kendo-ui.component';
import { SharedModule } from '../shared/shared.module';

import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { GridComponent } from './grid/grid.component';
import { GridExcelExportComponent } from './grid-excel-export/grid-excel-export.component';
import { GridPdfExportComponent } from './grid-pdf-export/grid-pdf-export.component';
import { GridFormComponent } from './grid-form/grid-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GridFormService } from './grid-form.service';

@NgModule({
  declarations: [
    KendoUiComponent,
    ExcelExportComponent,
    GridComponent,
    GridExcelExportComponent,
    GridPdfExportComponent,
    GridFormComponent,
  ],
  imports: [
    SharedModule,
    ExcelExportModule,
    BrowserAnimationsModule,
    GridModule,
    ExcelModule,
    HttpClientModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
  ],
  providers: [
    {
        deps: [HttpClient],
        provide: GridFormService,
        useFactory: (jsonp: HttpClient) => () => new GridFormService(jsonp)
    }
],
})
export class KendoUiModule {}
