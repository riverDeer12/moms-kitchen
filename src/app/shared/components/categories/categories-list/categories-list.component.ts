import { Category } from './../../../dtos/categories/category';
import { CategoriesService } from './../../../services/categories/categories.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';
import { ApiResponse } from 'app/shared/common/api-response';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  categories: Category[];
  loadingData: boolean;

  constructor(
    private commonService: CommonService,
    private categoriesService: CategoriesService
  ) {
    this.loadingData = true;
    this.setPageSettings();
  }

  ngOnInit() {
    this.getCategories();
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Categories list',
      'List of all registered categories'
    );
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = response as Category[];
        this.loadingData = false;
      },
      (error) => {
        console.log(console.error());
      }
    );
  }
}
