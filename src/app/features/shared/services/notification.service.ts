import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";
import {NotificationType} from "../enums/notification-type";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  /**
   * Notification lifetime in milliseconds.
   */
  private NOTIFICATION_LIFETIME: number = 3000;

  constructor(
    private translateService: TranslateService,
    private messageService: MessageService
  ) {
  }

  /**
   * Method that connects to PrimeNG message
   * service and renders notification message.
   *
   * @param type notification type value
   * @param messageKey JSON key of message resource
   */
  show(type: NotificationType, messageKey: string): void {
    this.translateService.get(messageKey).subscribe((message: string) => {
      this.setContent(type, message);
    });
  }

  /**
   * Call success notification.
   *
   * @param type notification type which corresponds to summary message key.
   * @param message success notification message.
   */
  private setContent = (type: NotificationType, message: string) => {
    this.translateService.get(type).subscribe((summary: string) => {
      this.messageService.add({
        summary: summary,
        severity: type,
        detail: message,
        sticky: false,
        life: this.NOTIFICATION_LIFETIME,
        icon: this.getIconKey(type)
      });
    });
  };

  /**
   * Helper method to set icon key
   * based on notification type.
   *
   * @param type enum value for notification type.
   */
  getIconKey(type: NotificationType): string {
    switch (type) {
      case NotificationType.Success:
        return 'pi-check';
      case NotificationType.Error:
        return 'pi-times';
      case NotificationType.Warning:
        return 'pi-question';
      case NotificationType.Info:
        return 'pi-info';
      default:
        return 'pi-info';
    }
  }
}
