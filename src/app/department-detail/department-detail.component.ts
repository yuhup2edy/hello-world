import { Component, OnInit } from '@angular/core';
import  {Router, ActivatedRoute,ParamMap }  from '@angular/router';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-department-detail',
  template: `
    you selected department with id = {{departmentId}}
    <br>

    <a (click) = "goPrevious()">Previous</a> &nbsp;
    <a (click) = "goNext()">Next</a>
  
  `,

    styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  //displayName = "false";
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
      //let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.route.paramMap.subscribe((params : ParamMap) => {
        let id = parseInt(params.get('id'));
        this.departmentId = id;
      });
      
  }

  goPrevious()
  {
     let previousID = this.departmentId - 1;
     this.router.navigate(['/departments',previousID]);
  }

  goNext()
  {
    let nextID = this.departmentId + 1;
    this.router.navigate(['/departments',nextID]);
  }

}
