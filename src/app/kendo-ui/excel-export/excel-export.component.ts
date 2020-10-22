import { Component, OnInit } from '@angular/core';
import { aggregateBy, process } from '@progress/kendo-data-query';
import { products } from '../products';

@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.scss']
})
export class ExcelExportComponent implements OnInit {
  public aggregates: any[] = [{field: 'UnitPrice', aggregate: 'sum'}];

  public group: any[] = [{
      field: 'Discontinued',
      aggregates: this.aggregates
  }];

  public data: any[] = process(products, {
      group: this.group
  }).data;

  public total: any = aggregateBy(products, this.aggregates);

  constructor() { }

  ngOnInit(): void {
  }

}
