import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  returnUrl = '/admin/categories';

  constructor(private commonService: CommonService, private router: Router) {
    this.setPageSettings();
  }

  ngOnInit() {}

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'New Category',
      'Please provide data for new category'
    );
  }

  goBackToList(): void {
    this.router.navigateByUrl(this.returnUrl);
  }
}
