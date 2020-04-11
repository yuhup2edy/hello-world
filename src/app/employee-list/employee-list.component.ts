import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    
      <div *ngIf = "displayName; then thenBlock; else elseBlock">
      </div>

      <ng-template #elseBlock>
      <h2> this message in else to be displayed </h2>
      </ng-template>

      <ng-template #thenBlock>
      <h2> comes here on THEN </h2>
      </ng-template>
    
      <div [ngSwitch]="color">
         <div *ngSwitchCase = "'red'"> You picked Red Color </div>
         <div *ngSwitchCase = "'blue'"> You picked blue Color </div>
         <div *ngSwitchCase = "'green'"> You picked green Color </div>
         <div *ngSwitchDefault > Try Again </div>
      </div>

  
      <div *ngFor="let c1 of colors">
        <h2> {{c1}} </h2>
      </div>

        ,
        
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public displayName = true;
  @Input() public parentData;
  public color = "red";
  public colors = ["red","blue","green","white","black"];
  constructor() { }

  ngOnInit(): void {
  }

}
