import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenService } from './service/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService
      .user
      .do((val) => {
        if (val && val.uid) {
          this.router.navigate(['/app']);
        }
      })
      .subscribe();
  }

}
