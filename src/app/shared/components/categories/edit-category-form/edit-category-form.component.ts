import {NotificationsService} from '../../../../core/services/notifications/notifications.service';
import {EditorConfig} from '../../../../settings/editor-settings';
import {CategoriesService} from 'app/core/services/categories/categories.service';
import {Category} from 'app/core/dtos/categories/category';
import {Component, Input, OnInit} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-edit-category-form',
    templateUrl: './edit-category-form.component.html',
    styleUrls: ['./edit-category-form.component.scss'],
})
export class EditCategoryFormComponent implements OnInit {
    @Input() category: Category;

    editForm: FormGroup;
    updateResponse: Category;
    editorConfig = EditorConfig.getConfig();

    constructor(
        private categoriesService: CategoriesService,
        private notificationsService: NotificationsService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.setEditForm();
    }

    setEditForm() {
        this.editForm = this.formBuilder.group({
            isActive: new FormControl(this.category.isActive),
            name: new FormControl(this.category.name, Validators.required),
            description: new FormControl(
                this.category.description,
                Validators.required
            ),
        });
    }

    submit(): void {
        if (!this.editForm.valid) {
            this.notificationsService.error('Form is not valid!');
            return;
        }
        this.categoriesService.updateCategory(this.category.id, this.editForm.value).subscribe(
            (response: Category) => {
                this.updateResponse = response as Category;
                this.router.navigateByUrl('/admin/categories').then();
                this.notificationsService.success('Successfully updated Category.');
            },
            (error: string) => {
                this.notificationsService.error(error);
            }
        );
    }
}
