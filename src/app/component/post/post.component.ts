import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() data: any;
  firebaseApp = firebase.app();
  imgUrl: string;

  constructor() {
  }

  ngOnInit() {
    const storageRef = this.firebaseApp.storage().ref().child(`${this.data.imgName}.jpg`);
    storageRef.getDownloadURL().then(url => this.imgUrl = url);
  }

}
