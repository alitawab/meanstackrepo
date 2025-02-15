import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification , NotificationType } from 'src/app/models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(
    public _notificationService: NotificationService
    ) { }

  ngOnInit() {
    this._notificationService.getAlert().subscribe((alert: Notification) => {
      this.notifications = [];
      if (!alert) {
          this.notifications = [];
          return;
      }
      this.notifications.push(alert);
      setTimeout(() => {
          this.notifications = this.notifications.filter(x => x !== alert);
      }, 4000);
  });
  }

  removeNotification(notification: Notification) {
    this.notifications = this.notifications.filter(x => x !== notification);
}

/**Set css class for Alert -- Called from alert component**/
cssClass(notification: Notification) {
    if (!notification) {
        return;
    }
    switch (notification.type) {
        case NotificationType.Success:
            return 'toast-success';
        case NotificationType.Error:
            return 'toast-error';
        case NotificationType.Info:
            return 'toast-info';
        case NotificationType.Warning:
            return 'toast-warning';
    }
}

}
