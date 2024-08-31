import { Component, OnInit } from '@angular/core';
import { TokenPayload } from '../../../../models/User.model';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { NotificationService } from '../../../../services/notification.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials: TokenPayload = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private userAuth: AuthenticationService,
    private router: Router,
    private _notificationservice: NotificationService
    ) { }

  ngOnInit() {
  }

  register(userform: FormGroup) {
    if (!userform.invalid) {
      this.credentials.username = userform.value.username;
      this.credentials.email = userform.value.email;
      this.credentials.password = userform.value.password;
    } else {
      return;
    }

    this.userAuth.register(this.credentials).subscribe((result) => {
      this._notificationservice.success(result.message);
    }, (err) => {
      this._notificationservice.error(err.message);
    });
  }

}
