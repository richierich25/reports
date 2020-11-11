import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ErrorComponent } from './layout/error/error.component';

import { GridComponent } from './kendo-ui/grid/grid.component';
import { KendoUiComponent } from './kendo-ui/kendo-ui.component';
import { ExcelExportComponent } from './kendo-ui/excel-export/excel-export.component';

import { FlexmonsterComponent } from './flexmonster/flexmonster.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { GridExcelExportComponent } from './kendo-ui/grid-excel-export/grid-excel-export.component';
import { GridPdfExportComponent } from './kendo-ui/grid-pdf-export/grid-pdf-export.component';
import { GridFormComponent } from './kendo-ui/grid-form/grid-form.component';
import { FlexGridComponent } from './flexmonster/flex-grid/flex-grid.component';
import { PivotTableDemoComponent } from './flexmonster/examples/pivot-table-demo/pivot-table-demo.component';
import { CallingEventsComponent } from './flexmonster/examples/calling-events/calling-events.component';
import { UsingApiCallsComponent } from './flexmonster/examples/using-api-calls/using-api-calls.component';
import { UpdatingDataComponent } from './flexmonster/examples/updating-data/updating-data.component';
import { CustomizingToolbarComponent } from './flexmonster/examples/customizing-toolbar/customizing-toolbar.component';
import { CustomizingGridComponent } from './flexmonster/examples/customizing-grid/customizing-grid.component';
import { WithHighchartsComponent } from './flexmonster/examples/with-highcharts/with-highcharts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { message: 'Lets take a report drive.' },
  },
  {
    path: 'kendo-ui',
    component: KendoUiComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { message: 'These are KendoUI Examples' },
      },
      { path: 'excel-export', component: ExcelExportComponent },
      { path: 'grid', component: GridComponent },
      { path: 'grid-form', component: GridFormComponent },
      { path: 'grid-excel-export', component: GridExcelExportComponent },
      { path: 'grid-pdf-export', component: GridPdfExportComponent },
    ],
  },
  {
    path: 'flexmonster',
    component: FlexmonsterComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { message: 'These are Flexmonster Examples' },
      },
      { path: 'flex-grid', component: FlexGridComponent },
      { path: 'pivot-table-demo', component: PivotTableDemoComponent },
      { path: 'calling-events', component: CallingEventsComponent },
      { path: 'using-api-calls', component: UsingApiCallsComponent },
      { path: 'updating-data', component: UpdatingDataComponent },
      { path: 'customizing-toolbar', component: CustomizingToolbarComponent },
      { path: 'customizing-grid', component: CustomizingGridComponent },
      { path: 'with-highcharts', component: WithHighchartsComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
