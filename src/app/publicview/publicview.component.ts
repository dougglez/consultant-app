import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { PublicViewHeaderComponent } from '../publicview';

@Component({
  selector: 'app-publicview',
  template: `
  <app-public-view-header></app-public-view-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class PublicviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
