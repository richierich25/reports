import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  content: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const messageData = 'message';
    this.content = this.route.snapshot.data[messageData];
  }

}
