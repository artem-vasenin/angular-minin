import { Component } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] = [
    {title: 'JS', text: 'Learn JavaScript'},
    {title: 'Angular', text: 'Learn Angular 9'},
    {title: 'React Native', text: 'Learn RN'},
    {title: 'NodeJs', text: 'Learn Node'},
  ];
}
