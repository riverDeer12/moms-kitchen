import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CommonService, Category} from 'moms-kitchen-common/';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
    category: Category;

    constructor(
        private activatedRoute: ActivatedRoute,
        private commonService: CommonService
    ) {
        this.setPageSettings();
    }

    ngOnInit() {
        this.listenToResolver();
    }

    setPageSettings(): void {
        this.commonService.setPageSettings(
            'Edit category',
            'Here you can edit category data'
        );
    }

    /**
     * Listen to resolver
     * actions.
     */
    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response: any) => {
            this.category = Object.assign(new Category(), response.category);
        });
    }


}
