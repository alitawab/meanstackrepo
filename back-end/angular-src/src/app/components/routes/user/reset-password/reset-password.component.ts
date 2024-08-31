import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TokenPayload } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  credentials: TokenPayload = {
    username: '',
    email: '',
    password: ''
  };
  constructor(private userAuth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  reset(resetForm: FormGroup) {
    if (!resetForm.invalid) {
      this.credentials.email = resetForm.value.email;
    } else {
      return;
    }
    console.log(this.credentials);
    this.userAuth.reset(this.credentials).subscribe(result => {
      console.log(result);
    });

  }

}
