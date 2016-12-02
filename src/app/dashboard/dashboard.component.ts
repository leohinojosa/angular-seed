import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  results = [
    {id:1000, title:'Zero',summary:'test'},
    {id:1001, title:'One',summary:'test'},
    {id:1010, title:'Two',summary:'test'},
    {id:1011, title:'Three',summary:'test'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
