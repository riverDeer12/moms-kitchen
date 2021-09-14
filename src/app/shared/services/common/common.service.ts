import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { EmailRequest } from 'app/shared/common/email-request';
import { PageSetting } from 'app/shared/common/page-setting';
import { Observable, Subject } from 'rxjs';
import { EmailResponse } from 'app/shared/common/email-response';

@Injectable()
export class CommonService {
  private pageSettings = new Subject<PageSetting>();

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
}
