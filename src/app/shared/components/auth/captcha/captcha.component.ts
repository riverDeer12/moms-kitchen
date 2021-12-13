import { CommonService } from 'app/core/services/common/common.service';
import { FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
})
export class CaptchaComponent implements OnInit {
  @Input() parentForm: FormGroup;

  captchaIsLoaded = false;
  captchaSuccess = false;
  captchaResponse?: string;
  captchaIsReady = false;

  siteKey = environment.captcha.siteKey;

  @ViewChild('captchaElem', { static: false }) captchaElem: ReCaptcha2Component;

  constructor(
    private cdr: ChangeDetectorRef,
    private commonService: CommonService
  ) {
    this.setCaptchaListener();
  }
  ngOnInit() {}

  setCaptchaListener(): void {
    this.commonService.getCaptchaStatus().subscribe((resetStatus: boolean) => {
      if (resetStatus) {
        this.captchaElem.resetCaptcha();
      }
    });
  }


  handleReset(): void {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.cdr.detectChanges();
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.cdr.detectChanges();
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.cdr.detectChanges();
  }

  handleReady(): void {
    this.captchaIsReady = true;
    this.cdr.detectChanges();
  }
}
