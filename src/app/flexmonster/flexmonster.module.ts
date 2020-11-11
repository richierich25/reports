import { NgModule } from '@angular/core';
import { FlexmonsterComponent } from './flexmonster.component';
import { SharedModule } from '../shared/shared.module';

import { FlexmonsterPivotModule } from 'ng-flexmonster';
import { FlexGridComponent } from './flex-grid/flex-grid.component';

// import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { SideMenuComponent } from './common/side-menu/side-menu.component';
import { PivotTableDemoComponent } from './examples/pivot-table-demo/pivot-table-demo.component';
import { CallingEventsComponent } from './examples/calling-events/calling-events.component';
import { UsingApiCallsComponent } from './examples/using-api-calls/using-api-calls.component';
import { UpdatingDataComponent } from './examples/updating-data/updating-data.component';
import { CustomizingToolbarComponent } from './examples/customizing-toolbar/customizing-toolbar.component';
import { CustomizingGridComponent } from './examples/customizing-grid/customizing-grid.component';
import { WithHighchartsComponent } from './examples/with-highcharts/with-highcharts.component';
import { ToggleButtonComponent } from './common/toggle-button/toggle-button.component';
import { ToggleSwitchComponent } from './common/toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [FlexmonsterComponent, FlexGridComponent,
    TopMenuComponent,
    SideMenuComponent,
    PivotTableDemoComponent,
    CallingEventsComponent,
    UsingApiCallsComponent,
    UpdatingDataComponent,
    CustomizingToolbarComponent,
    CustomizingGridComponent,
    WithHighchartsComponent,
    ToggleButtonComponent,
    ToggleSwitchComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    FlexmonsterPivotModule,
  ]
})
export class FlexmonsterModule { }
