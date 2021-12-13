import { environment } from 'environments/environment';
import { NotificationsService } from '../../../core/services/notifications/notifications.service';
import { CommonService } from '../../../core/services/common/common.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { fadeInAnimation } from './../../../shared/animations/page.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean;

  siteKey = environment.captcha.siteKey;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit() {
    this.setEmailForm();
  }

  setEmailForm(): void {
    this.contactForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      recaptcha: new FormControl('', Validators.required)
    });
  }

  sendEmail(): void {
    this.loading = true;

    this.commonService.sendEmail(this.contactForm.value).subscribe(
      () => {
        this.loading = false;
        this.setEmailForm();
        this.commonService.resetCaptcha();
        this.notificationsService.success('Email has been sent.');
      },
      () => {
        this.notificationsService.error('Email has not been sent.');
      }
    );
  }


}
