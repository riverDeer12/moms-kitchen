import { Category } from './../../../dtos/categories/category';
import { CategoriesService } from './../../../services/categories/categories.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-public-details',
  templateUrl: './category-public-details.component.html',
  styleUrls: ['./category-public-details.component.scss'],
})
export class CategoryPublicDetailsComponent implements OnInit {
  @Input() id: string;

  category: Category;
  loadingData: boolean;
  imageLoading: boolean;

  constructor(private service: CategoriesService) {
    this.loadingData = true;
    this.imageLoading = true;
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.service
      .getCategoryPublicDetails(this.id)
      .subscribe((response: Category) => {
        this.category = Object.assign(new Category(), response);
        this.loadingData = false;
      });
  }

  imageLoaded(): void {
    this.imageLoading = false;
  }
}
