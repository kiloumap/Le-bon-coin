import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService} from "../service/alert-service.service";

@Component({
  selector     : 'app-alert',
  templateUrl  : './alert.component.html',
  styleUrls    : ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alerts = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.createAlert.subscribe(
      alert => {
        this.alerts.push(alert);

        setTimeout(() => {
          for (const i in this.alerts) {
            if (this.alerts[i] === alert) {
              this.alerts.splice(+i, 1);
              break;
            }
          }
        }, 5000);
      }
    );
  }
}
