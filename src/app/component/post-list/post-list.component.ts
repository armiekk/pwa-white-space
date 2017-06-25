import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  itemList: any[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('/post').subscribe((valueList) => this.itemList = valueList);
  }

}
