import { NotificationsService } from '../../../../core/services/notifications/notifications.service';
import { EditorConfig } from '../../../../settings/editor-settings';
import { ComplexityLevelsService } from '../../../../core/services/complexity-levels/complexity-levels.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ComplexityLevel } from 'app/core/dtos/complexity-levels/complexity-level';

@Component({
  selector: 'app-create-complexity-level-form',
  templateUrl: './create-complexity-level-form.component.html',
  styleUrls: ['./create-complexity-level-form.component.scss'],
})
export class CreateComplexityLevelFormComponent implements OnInit {
  @Input() returnUrl: string;

  loadingData: boolean;
  createForm: FormGroup;
  creationResponse: ComplexityLevel;

  editorConfig = EditorConfig.getConfig();

  constructor(
    private complexityLevelsService: ComplexityLevelsService,
    private notificationsService: NotificationsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.setCreateForm();
  }

  setCreateForm() {
    this.createForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      complexityWeight: new FormControl('', [
        Validators.required,
        Validators.min(0),
      ]),
    });

    this.loadingData = false;
  }

  submit(): void {

    if (!this.createForm.valid) {
      this.notificationsService.error('Form is not valid!');
      return;
    }

    this.complexityLevelsService
      .createComplexityLevel(this.createForm.value)
      .subscribe(
        (response: ComplexityLevel) => {
          this.creationResponse = response as ComplexityLevel;
          this.router.navigateByUrl(this.returnUrl);
          this.notificationsService.success('Successfully created Complexity Level.');
        },
        (error: string) => {
          this.notificationsService.error(error);
        }
      );
  }
}
