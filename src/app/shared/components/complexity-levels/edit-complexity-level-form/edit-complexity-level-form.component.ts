import { EditorConfig } from '../../../../settings/editor-settings';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { ComplexityLevel, ComplexityLevelsService } from 'moms-kitchen-common';

@Component({
  selector: 'app-edit-complexity-level-form',
  templateUrl: './edit-complexity-level-form.component.html',
  styleUrls: ['./edit-complexity-level-form.component.scss'],
})
export class EditComplexityLevelFormComponent implements OnInit {
  @Input() complexityLevel: ComplexityLevel;

  editForm: FormGroup;
  updateResponse: ComplexityLevel;
  editorConfig = EditorConfig.getConfig();

  constructor(
    private complexityLevelsService: ComplexityLevelsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.setEditForm();
  }

  setEditForm() {
    this.editForm = this.formBuilder.group({
      isActive: new FormControl(
        this.complexityLevel.isActive,
        Validators.required
      ),
      name: new FormControl(this.complexityLevel.name, Validators.required),
      description: new FormControl(
        this.complexityLevel.description,
        Validators.required
      ),
      complexityWeight: new FormControl(this.complexityLevel.complexityWeight, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  submit(): void {
    if (!this.editForm.valid) {
      return;
    }

    this.complexityLevelsService
      .updateComplexityLevel(
        environment.apiUrl,
        this.complexityLevel.id,
        this.editForm.value
      )
      .subscribe(
        (response: ComplexityLevel) => {
          this.updateResponse = response as ComplexityLevel;
          this.router.navigateByUrl('/admin/complexity-levels').then();
        },
        (error: string) => {}
      );
  }
}
