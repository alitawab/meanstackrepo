import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {
  token: string;

  constructor(
    private userAuth: AuthenticationService,
    private activeRoutes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoutes.params.subscribe(result => {
      this.token = result.token;
    });

    this.userAuth.confirmation(this.token).subscribe(result => {
      this.router.navigateByUrl('/user/profile');
    });
  }



}
