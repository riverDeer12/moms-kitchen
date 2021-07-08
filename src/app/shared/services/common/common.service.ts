import { Injectable } from '@angular/core';
import { PageSetting } from 'app/shared/common/page-setting';
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {
  private pageSettings = new Subject<PageSetting>();

  constructor() {}

  getPageSettings(): Subject<PageSetting> {
    return this.pageSettings;
  }

  setPageSettings(title: string, subtitle: string): void {
    this.pageSettings.next({
      title: title,
      subtitle: subtitle,
    });
  }
}
