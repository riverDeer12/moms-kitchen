import { NotificationsService } from '../../../core/services/notifications/notifications.service';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'app/core/dtos/categories/category';
import { fadeInAnimation } from 'app/shared/animations/page.animation';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
      .getActiveCategories()
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

    this.categoriesService.filterCategories(this.filterForm.value).subscribe(
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
