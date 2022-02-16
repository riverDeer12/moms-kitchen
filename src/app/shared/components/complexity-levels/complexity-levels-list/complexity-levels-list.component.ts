import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDeleteComponent} from '../../common/confirm-delete/confirm-delete.component';
import {EntityType} from 'app/core/constants/entity-type';
import {Table} from 'primeng/table';
import {NotificationsService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/notifications/notifications.service';
import {ComplexityLevelsService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/complexity-levels/complexity-levels.service';
import {CommonService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';
import {environment} from '../../../../../environments/environment';
import {ComplexityLevel} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/complexity-levels/complexity-level';

@Component({
    selector: 'app-complexity-levels-list',
    templateUrl: './complexity-levels-list.component.html',
    styleUrls: ['./complexity-levels-list.component.scss'],
})
export class ComplexityLevelsListComponent implements OnInit {
    complexityLevels: ComplexityLevel[];
    loadingData: boolean;

    constructor(
        private complexityLevelsService: ComplexityLevelsService,
        private notificationService: NotificationsService,
        private commonService: CommonService,
        private router: Router,
        private modalService: NgbModal
    ) {
        this.loadingData = true;
        this.setPageSettings();
    }

    ngOnInit(): void {
        this.getComplexityLevels();
    }

    setPageSettings(): void {
        this.commonService.setPageSettings(
            'Complexity levels list',
            'List of all registered complexity levels'
        );
    }

    getComplexityLevels(): void {
        this.loadingData = true;

        this.complexityLevelsService.getComplexityLevels(environment.apiUrl).subscribe(
            (response: ComplexityLevel[]) => {
                this.complexityLevels = response.map(x => Object.assign(new ComplexityLevel(), x));
                this.loadingData = false;
            },
            () => {
                this.notificationService.error('Error getting complexity levels.');
            }
        );
    }

    confirmDelete(complexityLevelId: string): void {
        const modalRef = this.modalService.open(ConfirmDeleteComponent);
        modalRef.componentInstance.entityId = complexityLevelId;
        modalRef.componentInstance.entityType = EntityType.COMPLEXITY_LEVELS;
        modalRef.componentInstance.returnUrl = '/admin/complexity-levels';

        modalRef.result.then(() => {
            this.getComplexityLevels();
        }, () => {
            this.notificationService.error('Not good.');
        });
    }

    goToInfoPage(id: string): void {
        this.router.navigateByUrl('/admin/complexity-levels/info/' + id);
    }

    goToEditPage(id: string): void {
        this.router.navigateByUrl('/admin/complexity-levels/edit/' + id);
    }

    goToConfirmDeletePage(id: string): void {
        this.router.navigateByUrl('/admin/complexity-levels/delete/' + id);
    }

    clear(table: Table) {
        table.clear();
    }
}
