import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Front End and Technology Line Up 
    </h3>
    <ul class = "items">
       <li (click)="onSelect(department)" *ngFor = "let department of departments">
           <span class="badge"> {{department.id}}</span>{{department.name}}
       </li>
    </ul>
     `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  //@Input('parentData') public name;

  departments = [
    {"id":1, "name"  :"Angular"},
    {"id":2, "name"  :"Mongo DB"},
    {"id":3, "name"  :"React JS"},
    {"id":4, "name"  :"AWS or Azure"},
    {"id":5, "name"  :"Google Cloud"}

  ]
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  onSelect(department){
    this.router.navigate(['/departments',department.id]);
  }
}
