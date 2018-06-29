import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketService {

  private socket = io.Socket;

  constructor() {

    this.socket = io.connect('http://localhost:3000/');
    //console.log(socket);
  }

  listen(event: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, data => observer.next(data));
      // dispose of the event listener when unsubscribed
      return () => this.socket.off(event);
    });
  }

}
