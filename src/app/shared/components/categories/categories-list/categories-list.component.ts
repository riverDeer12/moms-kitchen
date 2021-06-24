import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  constructor(private commonService: CommonService) {
    this.setPageSettings();
  }

  ngOnInit() {}

  setPageSettings(): void {
    this.commonService.pageSettings.next({
      title: 'Categories list',
      subtitle: 'List of all registered categories',
    });
  }
}
