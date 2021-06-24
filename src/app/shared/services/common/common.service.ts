import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface PageSetting {
  title: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root',
})

export class CommonService {
  public pageSettings = new Subject<PageSetting>();

  constructor() {}
}
