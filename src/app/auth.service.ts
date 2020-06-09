import { Injectable } from '@angular/core';
import {CommonServiceService} from '../app/common-service.service';
import { resolve } from 'url';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
status;
  constructor() {

   }

  isloggedin() {
    this.status = sessionStorage.getItem('status');
    if (this.status === 'false' || this.status === null) {
      this.status = false;
    } else {
      this.status = true;
    }
    return this.status;
  }
}
