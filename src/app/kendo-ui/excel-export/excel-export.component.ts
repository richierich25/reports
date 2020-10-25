import { Component, OnInit } from '@angular/core';
import { aggregateBy, process, orderBy, filterBy, groupBy  } from '@progress/kendo-data-query';
import { products } from '../products';
import jsonData from '../products.json';

@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.scss'],
})
export class ExcelExportComponent implements OnInit {
  constructor() {}

  // Original Report
  // Report1 with Hidden State
  // Report2 with Locked
  public originalData: any[] = products;
  // public originalData: any[] = jsonData;
  public fields: string[] = Object.keys(this.originalData[0]);

  // Report3 with Group Header
  public group3: any[] = [
    {
      field: 'Category.CategoryName',
    },
  ];

  public data3: any[] = process(this.originalData, {
    group: this.group3,
  }).data;

  // Report4 with COlumn Header
  // Report5 with Group Footer
  public aggregates4: any[] = [{ field: 'UnitPrice', aggregate: 'sum' }];

  public group4: any[] = [
    {
      field: 'Category.CategoryName',
      aggregates: this.aggregates4,
    },
  ];

  public data4: any[] = process(this.originalData, {
    group: this.group4,
  }).data;

  // Report6 with Footer
  // Report7 with Multi Column Header
  public aggregates6: any[] = [{ field: 'UnitPrice', aggregate: 'sum' }];

  public total6: any = aggregateBy(this.originalData, this.aggregates6);

  // ---------- Cell Options -----------
  // Report8 with Padding Cells
  public headerPaddingCells: any = {
    background: '#ff66ff', // pink
  };
  public paddingCells: any = {
    background: '#ff0000', // red
  };
  public headerCells: any = {
    background: '#66ff66', // green
    textAlign: 'center',
  };
  public cells: any = {
    background: '#6699ff', // blue
    textAlign: 'center',
  };

  // ----------Process Helpers ----------
  // Combined Process
  public result = process(this.originalData, {
    group: [
      {
        field: 'Category.CategoryName',
        aggregates: [
          { aggregate: 'sum', field: 'UnitPrice' },
          { aggregate: 'sum', field: 'UnitsInStock' },
        ],
      },
    ],
    sort: [{ field: 'ProductName', dir: 'desc' }],
    filter: {
      logic: 'or',
      filters: [
        { field: 'Discontinued', operator: 'eq', value: false },
        { field: 'UnitPrice', operator: 'lt', value: 22 },
      ],
    },
  });

  // Sorting
  public resultSort = orderBy(this.originalData, [{ field: 'UnitPrice', dir: 'desc' }]);

  // Grouping
  public resultGroup = groupBy(this.originalData, [{ field: 'Discontinued' }, { field: 'Category.CategoryName', dir: 'asc' }]);

  // Filtering
  public resultFilter = filterBy(this.originalData, {
    logic: 'and',
    filters: [
        { field: 'ProductName', operator: 'startswith', value: 'n', ignoreCase: true },
        { field: 'Discontinued', operator: 'eq', value: false },
    ]
});

  // Aggregating
  public resultAgg = aggregateBy(this.originalData, [
    { field: 'ProductName', aggregate: 'count' },
    { field: 'UnitPrice', aggregate: 'sum' },
    { field: 'UnitPrice', aggregate: 'average' },
    { field: 'UnitsInStock', aggregate: 'min' },
    { field: 'UnitsInStock', aggregate: 'max' },
]);

  public test: any[] = jsonData;

  logger(flag: string): void {
    switch (flag) {
      case 'combined':
        console.log(this.result);
        // console.log(JSON.stringify(this.result)); // to stringify the JSON
        // console.log(JSON.stringify(this.result, null, 2)); // to provide 2 spaces of indentation
        break;
      case 'sorting':
        console.log(this.resultSort);
        break;
      case 'grouping':
        console.log(this.resultGroup);
        break;
      case 'filtering':
        console.log(this.resultFilter);
        break;
      case 'aggregating':
        console.log(this.resultAgg);
        break;
      default:
        console.log('No option selected');
    }
  }

  ngOnInit(): void {}
}
