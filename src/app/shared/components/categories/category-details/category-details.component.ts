import { Category } from 'app/core/dtos/categories/category';
import { Component, Input, OnInit } from '@angular/core';

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
