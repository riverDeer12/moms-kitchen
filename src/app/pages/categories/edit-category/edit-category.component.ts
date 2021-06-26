import { ApiResponse } from './../../../shared/common/api-response';
import { ICategoriesService } from 'app/shared/services/categories/i-categories-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from 'app/shared/dtos/categories/category';
import { ICommonService } from 'app/shared/services/common/i-common-service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  loadingData: boolean;
  response: ApiResponse<Category>;
  category: Category;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: ICommonService,
    private categoriesService: ICategoriesService
  ) {
    this.loadingData = true;
    this.setPageSettings();
    this.getCategory();
  }

  ngOnInit() {}

  getCategory(): void {
    const categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    this.categoriesService.getCategory(categoryId).subscribe((response) => {
      this.response = response as ApiResponse<Category>;
      this.category = response.result;
      this.loadingData = false;
    });
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Edit category',
      'Here you can edit category data'
    );
  }
}
