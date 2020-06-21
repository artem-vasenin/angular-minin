import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {AppCounterService} from './services/app-counter.service';
import {AuthService} from './services/auth.service';

export interface IPost {
  title: string;
  text: string;
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

  constructor(
    public appCounterService: AppCounterService,
    private router: Router,
    public authService: AuthService,
  ) {
    const stream$ = new Observable(observer => {
      setTimeout(() => observer.next('finish'), 5000);
    });

    stream$.subscribe(val => console.log(val));
  }

  goToPosts() {
    this.router.navigate(['/posts']);
  }

  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.date2 = date;
    });
  }
}
