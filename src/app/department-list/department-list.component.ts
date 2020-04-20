import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Front End and Technology Line Up 
    </h3>
    <ul class = "items">
       <li (click)="onSelect(department)" [class.selected] = "isSelected(department)" *ngFor = "let department of departments">
           <span class="badge"> {{department.id}}</span>{{department.name}}
       </li>
    </ul>
     `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  //@Input('parentData') public name;
  public selectedId;

  departments = [
    {"id":1, "name"  :"Angular"},
    {"id":2, "name"  :"Mongo DB"},
    {"id":3, "name"  :"React JS"},
    {"id":4, "name"  :"AWS or Azure"},
    {"id":5, "name"  :"Google Cloud"}

  ]
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  
  onSelect(department){
    this.router.navigate(['/departments',department.id]);
  }

  isSelected(department)
  {
    return department.id === this.selectedId;
  }
}
