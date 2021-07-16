import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from 'app/shared/animations/fade';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition('void => *', [useAnimation(FadeAnimation)]),
    ]),
  ]
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
