import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmDeleteComponent} from 'app/shared/components/common/confirm-delete/confirm-delete.component';
import {EntityType} from 'app/core/constants/entity-type';
import {Category} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/categories/category';
import {CommonService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';
import {NotificationsService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/notifications/notifications.service';

@Component({
    selector: 'app-category-info',
    templateUrl: './category-info.component.html',
    styleUrls: ['./category-info.component.scss']
})
export class CategoryInfoComponent implements OnInit {
    returnUrl = '/admin/categories';

    category: Category;

    constructor(
        private commonService: CommonService,
        private notificationService: NotificationsService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal
    ) {
        this.setPageSettings();
    }

    ngOnInit() {
        this.listenToResolver();
    }

    setPageSettings(): void {
        this.commonService.setPageSettings(
            'Category details',
            'Here you can read more details about category'
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

    goToEditPage(): void {
        this.router.navigateByUrl('/admin/categories/edit/' + this.category.id).then();
    }

    confirmDelete(): void {
        const modalRef = this.modalService.open(ConfirmDeleteComponent);
        modalRef.componentInstance.entityId = this.category.id;
        modalRef.componentInstance.entityType = EntityType.CATEGORIES;
        modalRef.componentInstance.returnUrl = '/categories';

        modalRef.result.then(() => {
            this.router.navigateByUrl('/admin/categories').then();
        }, () => {
            this.notificationService.error('Modal error.');
        });
    }
}
