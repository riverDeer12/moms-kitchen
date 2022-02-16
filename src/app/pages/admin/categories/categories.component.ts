import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/shared/animations/page.animation';
import {CommonService} from '../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [fadeInAnimation]
})
export class CategoriesComponent implements OnInit {
  title: string;
  subtitle: string;

  constructor(private commonService: CommonService) {
    this.getPageSettings();
  }

  ngOnInit(): void {}

  getPageSettings(): void {
    this.commonService.getPageSettings().subscribe(data => {
      this.title = data.title;
      this.subtitle = data.subtitle;
    });
  }

}
