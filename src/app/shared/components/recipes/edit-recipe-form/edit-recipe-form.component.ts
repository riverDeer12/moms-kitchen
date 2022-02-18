import {EditorConfig} from '../../../../settings/editor-settings';
import {Router} from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
} from '@angular/forms';
import {RecipesService, Recipe} from 'moms-kitchen-common';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-edit-recipe-form',
    templateUrl: './edit-recipe-form.component.html',
    styleUrls: ['./edit-recipe-form.component.scss'],
})
export class EditRecipeFormComponent implements OnInit {
    @Input() recipe: Recipe;

    response: Recipe;
    editForm: FormGroup;
    editorConfig = EditorConfig.getConfig();

    constructor(
        private recipesService: RecipesService,
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.setEditForm();
    }

    setEditForm(): void {
        this.editForm = this.fb.group({
            isActive: new FormControl(this.recipe.isActive),
            name: new FormControl(this.recipe.name, Validators.required),
            description: new FormControl(
                this.recipe.description,
                Validators.required
            ),
            complexityLevelId: new FormControl('', Validators.required),
            categoryIds: new FormControl('', Validators.required),
        });
    }

    submit(): void {
        if (!this.editForm.valid) {
            return;
        }

        this.recipesService.updateRecipe(environment.apiUrl, this.recipe.id, this.editForm.value).subscribe(
            (response: Recipe) => {
                this.response = response as Recipe;
                this.router.navigateByUrl('/admin/recipes');
            },
            (error: string) => {
            }
        );
    }
}
