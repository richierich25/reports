import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-grid-pdf-export',
  templateUrl: './grid-pdf-export.component.html',
  styleUrls: ['./grid-pdf-export.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridPdfExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
