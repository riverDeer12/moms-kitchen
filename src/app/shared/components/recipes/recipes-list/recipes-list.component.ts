
import { Component, OnInit } from '@angular/core';
import { ICommonService } from 'app/shared/services/common/i-common-service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  constructor(private commonService: ICommonService) {
    this.setPageSettings();
   }

  ngOnInit() {
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Recipes list',
      'List of all registered recipes'
    );
  }
}
