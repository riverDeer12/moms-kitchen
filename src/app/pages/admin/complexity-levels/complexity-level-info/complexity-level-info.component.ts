import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ConfirmDeleteComponent} from 'app/shared/components/common/confirm-delete/confirm-delete.component';
import {EntityType} from 'app/core/constants/entity-type';
import {CommonService} from 'app/core/services/common/common.service';
import {ComplexityLevel} from '../../../../core/dtos/complexity-levels/complexity-level';

@Component({
    selector: 'app-complexity-level-info',
    templateUrl: './complexity-level-info.component.html',
    styleUrls: ['./complexity-level-info.component.scss'],
})
export class ComplexityLevelInfoComponent implements OnInit {
    returnUrl = '/admin/complexity-levels';
    complexityLevel: ComplexityLevel;

    constructor(
        private commonService: CommonService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal
    ) {
        this.setPageSettings();
    }

    ngOnInit() {
        this.listenToResolver();
    }

    /**
     * Listen to resolver
     * actions.
     */
    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response: any) => {
            this.complexityLevel = Object.assign(new ComplexityLevel(), response.complexityLevel);
        });
    }

    setPageSettings(): void {
        this.commonService.setPageSettings(
            'Complexity level details',
            'Here you can read data about complexity level'
        );
    }

    goToEditPage(): void {
        this.router
            .navigateByUrl('/admin/complexity-levels/edit/' + this.complexityLevel.id)
            .then();
    }

    confirmDelete(): void {
        const modalRef = this.modalService.open(ConfirmDeleteComponent);
        modalRef.componentInstance.entityId = this.complexityLevel.id;
        modalRef.componentInstance.entityType = EntityType.COMPLEXITY_LEVELS;
        modalRef.componentInstance.returnUrl = '/admin/complexity-levels';

        modalRef.result.then(() => {
            this.router.navigateByUrl('/admin/complexity-levels').then();
        }, () => {
            console.log('Not good!');
        });
    }
}
