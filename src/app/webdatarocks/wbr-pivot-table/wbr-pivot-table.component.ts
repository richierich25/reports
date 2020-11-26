import { Component, OnInit, ViewChild } from '@angular/core';
import { WdrComponent } from '../wdr/wdr.component';


@Component({
  selector: 'app-wbr-pivot-table',
  templateUrl: './wbr-pivot-table.component.html',
  styleUrls: ['./wbr-pivot-table.component.scss']
})
export class WbrPivotTableComponent{
  @ViewChild('pivot1') child: WdrComponent;

  onPivotReady(pivot: WebDataRocks.Pivot): void {
    console.log('[ready] WebdatarocksComponent', this.child);
  }

  onCustomizeCell(
    cell: WebDataRocks.CellBuilder,
    data: WebDataRocks.CellData
  ): void {
    if (data.isClassicTotalRow) {
      cell.addClass('fm-total-classic-r');
    }
    if (data.isGrandTotalRow) {
      cell.addClass('fm-grand-total-r');
    }
    if (data.isGrandTotalColumn) {
      cell.addClass('fm-grand-total-c');
    }
  }

  onReportComplete(): void {
    this.child.webDataRocks.off('reportcomplete');
    this.child.webDataRocks.setReport({
      dataSource: {
        filename: '../.././../assets/json-data.json',
      },
    });
  }

}
