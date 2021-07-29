import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private service: ToastrService) {}

  success(message: string): void {
    this.service.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">' +
        message +
        '</span>',
      '',
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-success alert-with-icon',
        positionClass: 'toast-top-right',
      }
    );
  }

  info(message: string): void {
    this.service.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">' +
        message +
        '</span>',
      '',
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-info alert-with-icon',
        positionClass: 'toast-top-right',
      }
    );
  }

  error(message: string): void {
    this.service.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">' +
        message +
        '</span>',
      '',
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-danger alert-with-icon',
        positionClass: 'toast-top-right',
      }
    );
  }
}
