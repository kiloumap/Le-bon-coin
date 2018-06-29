import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  createAlert = new EventEmitter<{
    severity: string
    message: string,
  }>();

  constructor() {}

  emitAlert(severity: string, message: string) {
    this.createAlert.emit({severity, message});
  }
}
