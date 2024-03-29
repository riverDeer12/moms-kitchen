import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormGroup } from '@angular/forms';
import { ComplexityLevel, ComplexityLevelsService } from 'moms-kitchen-common';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-complexity-level-selector',
  templateUrl: './complexity-level-selector.component.html',
  styleUrls: ['./complexity-level-selector.component.scss'],
})
export class ComplexityLevelSelectorComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() complexityLevelId?: string;

  loadingData: boolean;
  complexityLevels: ComplexityLevel[];
  settings: IDropdownSettings = {};

  constructor(private service: ComplexityLevelsService) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getComplexityLevels();
  }

  getComplexityLevels(): void {
    this.service
      .getComplexityLevels(environment.apiUrl)
      .subscribe((response: ComplexityLevel[]) => {
        this.complexityLevels = response.map((x) =>
          Object.assign(new ComplexityLevel(), x)
        );
        this.getComplexityLevel();
      });
  }

  getComplexityLevel(): void {
    if (this.complexityLevelId === undefined) {
      this.loadingData = false;
      return;
    }

    this.service
      .getComplexityLevel(environment.apiUrl, this.complexityLevelId)
      .subscribe((response: ComplexityLevel) => {
        this.parentForm.get('complexityLevelId').setValue(response.id);
        this.loadingData = false;
      });
  }
}
