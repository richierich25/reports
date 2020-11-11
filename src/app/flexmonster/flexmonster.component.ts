import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as Flexmonster from 'flexmonster';
import { FlexmonsterPivot } from 'ng-flexmonster';

@Component({
  selector: 'app-flexmonster',
  templateUrl: './flexmonster.component.html',
  styleUrls: ['./flexmonster.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlexmonsterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
