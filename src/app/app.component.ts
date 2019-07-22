import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mes posts';
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  postlists = [
    { 
	  title: 'POST 1',
	  content: '1111111111111111111 111111111111111111111 1111111111111111111111 1111111111111111111111111111111111 111111111111111111111111111111111111111111',
	  loveIts: 0,
	  created_at: Date.now()
    },
    {
      title: 'POST 2',
	  content: '222222222222222222222222 22222222222222222222222222 22222222222222222222222222222 2222222222222222222 222222222222222222222222222222222222 2222222222222222222222222222',
	  loveIts: 0,
	  created_at: Date.now()
    },
    {
      title: 'POST 3',
	  content: '33333333333333 33333333333333333333 33333333333333333333333 333333333333333333333333333 333333333333333333333333 333333333333333333333333333 3333333333333333333333333333',
	  loveIts: 0,
	  created_at: Date.now()
    }
  ];
}
