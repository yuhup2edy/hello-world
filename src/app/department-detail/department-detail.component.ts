import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    you selected department with id = {{departmentId}}
    
  `
    ,

  
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  //displayName = "false";
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.departmentId = id;
  }

}
