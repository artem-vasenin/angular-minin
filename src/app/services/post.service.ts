import {Injectable} from '@angular/core';
import {IPost} from '../app.component';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: IPost[] = [
    {title: 'JS', text: 'Learn JavaScript', id: 'p1'},
    {title: 'Angular', text: 'Learn Angular 9', id: 'p2'},
    {title: 'React Native', text: 'Learn RN', id: 'p3'},
    {title: 'NodeJs', text: 'Learn Node', id: 'p4'},
  ];

  getPosts() {
    return this.posts;
  }

  getPost(id: string) {
    return this.posts.find(p => p.id === id);
  }

  addPost(post: IPost) {
    this.posts.unshift(post);
  }
}
