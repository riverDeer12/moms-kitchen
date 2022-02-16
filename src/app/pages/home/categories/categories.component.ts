import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/shared/animations/page.animation';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {NotificationsService} from '../../../../../projects/moms-kitchen-common/src/lib/services/notifications/notifications.service';
import {CategoriesService} from '../../../../../projects/moms-kitchen-common/src/lib/services/categories/categories.service';
import {environment} from '../../../../environments/environment';
import {Category} from '../../../../../projects/moms-kitchen-common/src/lib/dtos/categories/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [fadeInAnimation],
})
export class CategoriesComponent implements OnInit {
  loadingData: boolean;
  categories: Category[];
  filterForm: FormGroup;
  navbarLabel = 'Mom\'s Kitchen';

  constructor(
    private categoriesService: CategoriesService,
    private notificationsService: NotificationsService,
    private fb: FormBuilder
  ) {
    this.loadingData = true;
    this.setFilterForm();
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService
      .getActiveCategories(environment.apiUrl)
      .subscribe((response: Category[]) => {
        this.categories = response.map((x) => Object.assign(new Category(), x));
        this.loadingData = false;
      });
  }

  setFilterForm(): void {
    this.filterForm = this.fb.group({
      keyword: new FormControl('', Validators.required)
    });
  }

  filterCategories(): void {
    this.loadingData = true;

    if (!this.filterForm.valid) {
      return;
    }

    this.categoriesService.filterCategories(environment.apiUrl, this.filterForm.value).subscribe(
      (response: Category[]) => {
        this.categories = response.map((x) => Object.assign(new Category(), x));
        this.loadingData = false;
      },
      () => {
        this.notificationsService.error(
          'At least one search property needs to be populated.'
        );
        this.loadingData = false;
      }
    );
  }
}
