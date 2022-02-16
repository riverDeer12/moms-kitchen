import {Component, Input, OnInit} from '@angular/core';
import {ComplexityLevel} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/complexity-levels/complexity-level';

@Component({
    selector: 'app-complexity-level-details',
    templateUrl: './complexity-level-details.component.html',
    styleUrls: ['./complexity-level-details.component.scss'],
})
export class ComplexityLevelDetailsComponent implements OnInit {
    @Input() id: string;

    @Input() complexityLevel: ComplexityLevel;

    constructor() {
    }

    ngOnInit() {
    }
}
