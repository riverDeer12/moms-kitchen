
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  constructor(private commonService: CommonService) {
    this.setPageSettings();
   }

  ngOnInit() {
  }

  setPageSettings(): void {
    this.commonService.pageSettings.next({
      title: 'Recipes list',
      subtitle: 'List of all registered recipes',
    });
  }
}
