import { Component, Input, OnInit } from '@angular/core';
import {Category} from 'moms-kitchen-common';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  @Input() category: Category;

  constructor() {}

  ngOnInit() {}
}
