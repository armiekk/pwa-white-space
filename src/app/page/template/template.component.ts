import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../service/authen.service';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  isCreatePost: boolean = false;

  constructor(
    private authService: AuthenService,
    private router: Router,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .do(() => this.router.navigate(['/login']))
      .subscribe();
  }

  goToProfilePage() {
    this.router.navigate(['/app/profile']);
  }

  goToHomePage() {
    this.isCreatePost = false;
    this.router.navigate(['/app/home']);
  }

  goToCreatePost() {
    this.isCreatePost = true;
    this.router.navigate(['/app/create']);
  }

}
