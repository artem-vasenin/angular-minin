import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface IPost {
  title: string;
  text: string;
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts: IPost[] = [
    {title: 'JS', text: 'Learn JavaScript'},
    {title: 'Angular', text: 'Learn Angular 9'},
    {title: 'React Native', text: 'Learn RN'},
    {title: 'NodeJs', text: 'Learn Node'},
  ];
  search = '';
  prom: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => resolve('promise finish'), 4000);
  });
  // для пайпа асинх достаточно этого обсервера
  date: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => obs.next(new Date()), 1000);
  });
  // без пайпа необходимо обработать его через стрим в хуке инициализации
  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => obs.next(new Date()), 1000);
  });
  date2: Date;

  constructor() {
    const stream$ = new Observable(observer => {
      setTimeout(() => observer.next('finish'), 5000);
    });

    stream$.subscribe(val => console.log(val));
  }

  addPost(post: IPost) {
    this.posts.unshift(post);
  }

  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.date2 = date;
    });
  }
}
