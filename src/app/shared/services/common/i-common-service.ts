import { Injectable } from '@angular/core';
import { PageSetting } from 'app/shared/common/page-setting';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ICommonService {
    abstract getPageSettings(): Subject<PageSetting>;
    abstract setPageSettings(title: string, subtitle: string): void;
}
