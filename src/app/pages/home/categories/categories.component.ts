import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/shared/animations/page.animation';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Category, CategoriesService } from 'moms-kitchen-common';

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
  navbarLabel = "Mom's Kitchen";

  constructor(
    private categoriesService: CategoriesService,
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
      keyword: new FormControl('', Validators.required),
    });
  }

  filterCategories(): void {
    this.loadingData = true;

    if (!this.filterForm.valid) {
      return;
    }

    this.categoriesService
      .filterCategories(environment.apiUrl, this.filterForm.value)
      .subscribe(
        (response: Category[]) => {
          this.categories = response.map((x) =>
            Object.assign(new Category(), x)
          );
          this.loadingData = false;
        },
        () => {
          this.loadingData = false;
        }
      );
  }
}
