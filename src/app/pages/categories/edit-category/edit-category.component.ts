import { ApiResponse } from './../../../shared/common/api-response';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from 'app/shared/dtos/categories/category';
import { CommonService } from 'app/shared/services/common/common.service';
import { CategoriesService } from 'app/shared/services/categories/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  loadingData: boolean;
  categoryId: string;
  returnUrl = '/categories';

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
  ) {
    this.loadingData = true;
    this.setPageSettings();
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadingData = false;
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Edit category',
      'Here you can edit category data'
    );
  }
}
