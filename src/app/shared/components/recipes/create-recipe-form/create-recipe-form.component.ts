import { EditorConfig } from '../../../../settings/editor-settings';
import { NotificationsService } from '../../../../core/services/notifications/notifications.service';
import { Router } from '@angular/router';
import { Recipe } from 'app/core/dtos/recipes/recipe';
import { RecipesService } from '../../../../core/services/recipes/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.scss'],
})
export class CreateRecipeFormComponent implements OnInit {
  @Input() returnUrl: string;

  loadingData: boolean;
  createForm: FormGroup;
  createdRecipe: Recipe;

  editorConfig = EditorConfig.getConfig();

  constructor(
    private formBuilder: FormBuilder,
    private recipesService: RecipesService,
    private notificationsService: NotificationsService,
    private router: Router
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.setCreateForm();
  }

  setCreateForm() {
    this.createForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      complexityLevelId: new FormControl('', Validators.required),
      categoryIds: new FormControl('', Validators.required),
    });

    this.loadingData = false;
  }

  submit(): void {
    if (!this.createForm.valid) {
      this.notificationsService.error('Form is not valid.');
      return;
    }

    this.recipesService.createRecipe(this.createForm.value).subscribe(
      (response: Recipe) => {
        this.createdRecipe = response as Recipe;
        this.router.navigateByUrl(this.returnUrl);
        this.notificationsService.success('Successfully created Recipe.');
      },
      (error: string) => {
        this.notificationsService.error(error);
      }
    );
  }
}
