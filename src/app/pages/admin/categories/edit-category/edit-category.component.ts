import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  loadingData: boolean;
  id: string;
  returnUrl = '/admin/categories';

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private router: Router
  ) {
    this.loadingData = true;
    this.setPageSettings();
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadingData = false;
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Edit category',
      'Here you can edit category data'
    );
  }
}
