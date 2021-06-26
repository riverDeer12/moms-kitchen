import { Component, OnInit } from '@angular/core';
import { ICommonService } from 'app/shared/services/common/i-common-service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  constructor(private commonService: ICommonService) {
    this.setPageSettings();
  }

  ngOnInit() {}

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'New Category',
      'Please provide data for new category'
    );
  }
}
