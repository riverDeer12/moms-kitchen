import { CategoriesService } from 'app/shared/services/categories/categories.service';
import { Category } from 'app/shared/dtos/categories/category';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  @Input() id: string;

  category: Category;
  loadingData: boolean;

  constructor(private service: CategoriesService) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getComplexityLevel();
  }

  getComplexityLevel() {
    this.service.getCategory(this.id).subscribe((response: Category) => {
      this.category = response as Category;
      this.loadingData = false;
    });
  }
}
