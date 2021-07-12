import { ComplexityLevel } from './../../../dtos/complexity-levels/complexity-level';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplexityLevelsService } from 'app/shared/services/complexity-levels/complexity-levels.service';

@Component({
  selector: 'app-edit-complexity-level-form',
  templateUrl: './edit-complexity-level-form.component.html',
  styleUrls: ['./edit-complexity-level-form.component.scss']
})
export class EditComplexityLevelFormComponent implements OnInit {
  @Input() id: string;
  @Input() returnUrl: string;

  loadingData: boolean;
  editForm: FormGroup;
  updateResponse: ComplexityLevel;
  complexityLevel: ComplexityLevel;

  constructor(
    private service: ComplexityLevelsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getComplexityLevel();
  }

  getComplexityLevel() {
    this.service
      .getComplexityLevel(this.id)
      .subscribe((response: ComplexityLevel) => {
        this.complexityLevel = response as ComplexityLevel;
        this.setEditForm();
      });
  }

  setEditForm() {
    this.editForm = this.formBuilder.group({
      isActive: new FormControl(this.complexityLevel.isActive, Validators.required),
      name: new FormControl(this.complexityLevel.name, Validators.required),
      description: new FormControl(this.complexityLevel.description, Validators.required),
      complexityWeight: new FormControl(this.complexityLevel.complexityWeight, [
        Validators.required,
        Validators.min(0),
      ]),
    });

    this.loadingData = false;
  }

  submit(): void {
    this.service
      .updateComplexityLevel(this.id, this.editForm.value)
      .subscribe((response: ComplexityLevel) => {
        this.updateResponse = response as ComplexityLevel;
        this.router.navigateByUrl(this.returnUrl);
      });
  }

}
