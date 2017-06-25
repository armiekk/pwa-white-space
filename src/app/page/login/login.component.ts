import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../service/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential: { user?: string, password?: string } = {};

  constructor(
    private authService: AuthenService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  login(credential: { user?: string, password?: string }) {
    this.authService.login().do(() => this.router.navigate(['/app'])).subscribe();
  }

}
