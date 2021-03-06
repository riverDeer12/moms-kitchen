import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
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
