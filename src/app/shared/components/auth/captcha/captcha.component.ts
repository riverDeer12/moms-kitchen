import { FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

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

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  handleReset(): void {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.cdr.detectChanges();
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    console.log(this.captchaResponse);
    this.printCaptchaStatus();
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

  printCaptchaStatus(): void {
    console.log('Success: ', this.captchaSuccess);
    console.log('Ready: ', this.captchaIsReady);
    console.log('Loaded: ', this.captchaIsLoaded);
    console.log('Ready: ', this.captchaIsLoaded);
  }
}
