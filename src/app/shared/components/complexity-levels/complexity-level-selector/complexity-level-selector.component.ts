import { ComplexityLevel } from './../../../dtos/complexity-levels/complexity-level';
import { Component, Input, OnInit } from '@angular/core';
import { ComplexityLevelsService } from 'app/shared/services/complexity-levels/complexity-levels.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complexity-level-selector',
  templateUrl: './complexity-level-selector.component.html',
  styleUrls: ['./complexity-level-selector.component.scss'],
})
export class ComplexityLevelSelectorComponent implements OnInit {
  @Input() parentForm: FormGroup;

  loadingData: boolean;
  complexityLevels: ComplexityLevel[];
  settings: IDropdownSettings = {};

  constructor(private service: ComplexityLevelsService) {
    this.loadingData = true;
    this.initSettings();
  }

  ngOnInit() {
    this.getComplexityLevels();
  }

  getComplexityLevels(): void {
    this.service
      .getComplexityLevels()
      .subscribe((response: ComplexityLevel[]) => {
        this.complexityLevels = response.map((x) =>
          Object.assign(new ComplexityLevel(), x)
        );
        this.loadingData = false;
      });
  }

  initSettings(): void {
    this.settings = {
      singleSelection: true,
      defaultOpen: false,
      itemsShowLimit: 3,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
    };
  }
}
