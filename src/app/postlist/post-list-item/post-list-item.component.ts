import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {


  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  incrementLoveits() {
  	this.loveIts++;
  }

  decrementLoveits() {
  	this.loveIts--;
  }

  getColor() {
  	if(this.loveIts > 0) {
  		return 'green';
  	} else if (this.loveIts < 0) {
  		return 'red';
  	}
  }

}
