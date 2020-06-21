import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {IPost} from '../../app.component';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: IPost = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postService.getPost(params.id);
    });
  }

}
