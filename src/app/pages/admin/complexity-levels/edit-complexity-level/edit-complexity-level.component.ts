import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ComplexityLevel} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/complexity-levels/complexity-level';
import {CommonService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';

@Component({
    selector: 'app-edit-complexity-level',
    templateUrl: './edit-complexity-level.component.html',
    styleUrls: ['./edit-complexity-level.component.scss'],
})
export class EditComplexityLevelComponent implements OnInit {
    complexityLevel: ComplexityLevel;

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
            'Edit complexity level',
            'Here you can edit complexity level data'
        );
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
}
