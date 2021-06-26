import { Component, OnInit } from '@angular/core';
import { ICommonService } from 'app/shared/services/common/i-common-service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  constructor(private commonService: ICommonService) {
    this.setPageSettings();
  }

  ngOnInit() {}

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Categories list',
      'List of all registered categories'
    );
  }
}
