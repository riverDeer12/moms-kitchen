import {Category} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/categories/category';
import {Component, Input, OnInit} from '@angular/core';
import {fadeInAnimation} from 'app/shared/animations/page.animation';
import {CategoriesService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/categories/categories.service';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-category-public-details',
    templateUrl: './category-public-details.component.html',
    styleUrls: ['./category-public-details.component.scss'],
    animations: [fadeInAnimation]
})
export class CategoryPublicDetailsComponent implements OnInit {
    @Input() id: string;

    category: Category;
    loadingData: boolean;
    imageLoading: boolean;

    constructor(private service: CategoriesService) {
        this.loadingData = true;
        this.imageLoading = true;
    }

    ngOnInit() {
        this.getCategory();
    }

    getCategory() {
        this.service
            .getCategoryPublicDetails(environment.apiUrl, this.id)
            .subscribe((response: Category) => {
                this.category = Object.assign(new Category(), response);
                this.loadingData = false;
            });
    }

    imageLoaded(): void {
        this.imageLoading = false;
    }
}
