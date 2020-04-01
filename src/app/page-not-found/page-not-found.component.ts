import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
   template: `
    <H3>
      Invalid Landing Page !
    </H3>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
