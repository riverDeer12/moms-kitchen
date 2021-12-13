import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { EmailRequest } from 'app/core/common/email-request';
import { PageSetting } from 'app/core/common/page-setting';
import { Observable, Subject } from 'rxjs';
import { EmailResponse } from 'app/core/common/email-response';

@Injectable()
export class CommonService {
  private pageSettings = new Subject<PageSetting>();

  private captchaResetReady = new Subject<boolean>();

  commonServiceUrl = environment.apiUrl + '/common';

  constructor(private http: HttpClient) {}

  getPageSettings(): Subject<PageSetting> {
    return this.pageSettings;
  }

  setPageSettings(title: string, subtitle: string): void {
    this.pageSettings.next({
      title: title,
      subtitle: subtitle,
    });
  }

  sendEmail(request: EmailRequest): Observable<EmailResponse> {
    return this.http.post<EmailResponse>(this.commonServiceUrl + '/email-contact', request);
  }

  getCaptchaStatus(): Subject<boolean> {
    return this.captchaResetReady;
  }

  resetCaptcha(): void {
    this.captchaResetReady.next(true);
  }
}
