import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/core/services/common/common.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss'],
})
export class CreateRecipeComponent implements OnInit {
  returnUrl = '/admin/recipes';

  constructor(private commonService: CommonService, private router: Router) {
    this.setPageSettings();
  }

  ngOnInit() {}

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'New Recipe',
      'Please provide data for new recipe'
    );
  }

  goBackToList(): void {
    this.router.navigateByUrl(this.returnUrl);
  }
}
