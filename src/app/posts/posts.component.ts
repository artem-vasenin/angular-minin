import { Component, OnInit } from '@angular/core';
import {IPost} from '../app.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [
    {title: 'JS', text: 'Learn JavaScript'},
    {title: 'Angular', text: 'Learn Angular 9'},
    {title: 'React Native', text: 'Learn RN'},
    {title: 'NodeJs', text: 'Learn Node'},
  ];
  search = '';

  constructor() { }

  addPost(post: IPost) {
    this.posts.unshift(post);
  }

  ngOnInit(): void {
  }

}
