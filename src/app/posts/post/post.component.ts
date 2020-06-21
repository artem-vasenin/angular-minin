import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,} from '@angular/router';

import {IPost} from '../../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: IPost = null;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.post = this.route.snapshot.data.post;
    this.route.data.subscribe(data => {
      this.post = data.post;
    });
  }

}
