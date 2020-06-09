import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from '../app.component';

@Pipe({name: 'postFilter'})
export class PostFilterPipe implements PipeTransform {
  transform(posts: IPost[], search: string = ''): IPost[] {
    if (!search.trim()) { return posts; }
    return posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
      || post.text.toLowerCase().includes(search.toLowerCase()));
  }
}
