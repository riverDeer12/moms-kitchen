import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  title: string;
  subtitle: string;

  constructor(private commonService: CommonService) {
    this.getPageSettings();
  }

  ngOnInit(): void {}

  getPageSettings(): void {
    this.commonService.pageSettings.subscribe(data => {
      this.title = data.title;
      this.subtitle = data.subtitle;
    });
  }

}
