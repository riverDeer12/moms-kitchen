import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';

@Component({
    selector: 'app-create-complexity-level',
    templateUrl: './create-complexity-level.component.html',
    styleUrls: ['./create-complexity-level.component.css'],
})
export class CreateComplexityLevelComponent implements OnInit {
    returnUrl = '/admin/complexity-levels';

    constructor(private commonService: CommonService, private router: Router) {
        this.setPageSettings();
    }

    ngOnInit(): void {
    }

    setPageSettings(): void {
        this.commonService.setPageSettings(
            'New Complexity Level',
            'Please provide data for new complexity level'
        );
    }

    goBackToList(): void {
        this.router.navigateByUrl(this.returnUrl);
    }
}
