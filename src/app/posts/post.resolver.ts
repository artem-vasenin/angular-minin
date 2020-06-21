import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IPost} from '../app.component';
import {Observable} from 'rxjs';
import {PostService} from '../services/post.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<IPost> {
  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPost> | Promise<IPost> | IPost {
    console.log('RESOLVER', route.params);
    return this.postService.getPost(route.params.id);
  }

}
