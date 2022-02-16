import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {PageSetting} from '../../dtos/common/page-setting';
import {EmailRequest} from '../../dtos/common/email-request';
import {EmailResponse} from '../../dtos/common/email-response';

@Injectable()
export class CommonService {
    private pageSettings = new Subject<PageSetting>();

    private captchaResetReady = new Subject<boolean>();

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

    /**
     * Send email endpoint
     * connector.
     * @param url api endpoint
     * @param request email data
     */
    sendEmail(url: string, request: EmailRequest): Observable<EmailResponse> {
        return this.http.post<EmailResponse>(url + '/email-contact', request);
    }

    getCaptchaStatus(): Subject<boolean> {
        return this.captchaResetReady;
    }

    resetCaptcha(): void {
        this.captchaResetReady.next(true);
    }
}
