import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Router } from '@angular/router';
import { TokenPayload } from '../../../../models/User.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  credentials: TokenPayload = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private userAuth: AuthenticationService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  login(loginForm: FormGroup) {
    if (!loginForm.invalid) {
      this.credentials.username = loginForm.value.username;
      this.credentials.password = loginForm.value.password;
    } else {
      return;
    }
    this.userAuth.login(this.credentials).subscribe(() => {

      this.router.navigateByUrl('/user/profile');
    }, (err) => {
      console.log(err);
    });
  }
}
