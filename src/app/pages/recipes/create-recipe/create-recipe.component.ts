import { Component, OnInit } from '@angular/core';
import { ICommonService } from 'app/shared/services/common/i-common-service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss'],
})
export class CreateRecipeComponent implements OnInit {
  constructor(private commonService: ICommonService) {
    this.setPageSettings();
  }

  ngOnInit() {}

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'New Recipe',
      'Please provide data for new recipe'
    );
  }
}
