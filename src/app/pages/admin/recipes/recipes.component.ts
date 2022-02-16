import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/shared/animations/page.animation';
import {CommonService} from '../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  animations: [fadeInAnimation]
})
export class RecipesComponent implements OnInit {
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
