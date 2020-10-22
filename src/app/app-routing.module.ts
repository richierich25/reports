import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ErrorComponent } from './layout/error/error.component';

import { GridComponent } from './kendo-ui/grid/grid.component';
import { KendoUiComponent } from './kendo-ui/kendo-ui.component';
import { ExcelExportComponent } from './kendo-ui/excel-export/excel-export.component';

import { FlexmonsterComponent } from './flexmonster/flexmonster.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

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
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
