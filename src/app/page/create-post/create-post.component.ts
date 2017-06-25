import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthenService } from '../../service/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postModel: any = {};

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createPost(postModel: any) {
    const itemList = this.db.list('/post');
    this.authService.user.do((val) => {
      itemList.push({ ...postModel, createBy: val.displayName });
      this.router.navigate(['/app']);
    }).subscribe()
  }

}
