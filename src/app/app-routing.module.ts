import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexmonsterComponent } from './flexmonster/flexmonster.component';
import { KendoUiComponent } from './kendo-ui/kendo-ui.component';
import { ErrorComponent } from './layout/error/error.component';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent},
  {path: 'kendo-ui', component: KendoUiComponent},
  {path: 'flexmonster', component: FlexmonsterComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
