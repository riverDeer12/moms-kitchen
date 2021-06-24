import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  constructor(private commonService: CommonService) {
    this.setPageSettings();
   }

  ngOnInit() {
  }

  setPageSettings(): void {
    this.commonService.pageSettings.next({
      title: 'New Recipe',
      subtitle: 'Please provide data for new recipe',
    });
  }

}
