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
            return;
        }

        this.recipesService.createRecipe(environment.apiUrl, this.createForm.value).subscribe(
            (response: Recipe) => {
                this.createdRecipe = response as Recipe;
                this.router.navigateByUrl(this.returnUrl);
            },
            (error: string) => {
            }
        );
    }
}
