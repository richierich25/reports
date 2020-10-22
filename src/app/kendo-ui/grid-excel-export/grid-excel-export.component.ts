import { Component, OnInit } from '@angular/core';
import { aggregateBy } from '@progress/kendo-data-query';
import { sampleProducts } from '../products';

@Component({
  selector: 'app-grid-excel-export',
  templateUrl: './grid-excel-export.component.html',
  styleUrls: ['./grid-excel-export.component.scss']
})
export class GridExcelExportComponent implements OnInit {
  public aggregates: any[] = [{field: 'UnitPrice', aggregate: 'sum'}];

  public products: any[] = sampleProducts;

  public total: any = aggregateBy(this.products, this.aggregates);

  public group: any[] = [{
      field: 'Discontinued',
      aggregates: this.aggregates
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
