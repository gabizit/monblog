import { Component, Input, OnInit } from '@angular/core';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

import { Post } from '../classes/post.model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postlists: Post[];

  constructor() { }

  ngOnInit() {
  }

}
