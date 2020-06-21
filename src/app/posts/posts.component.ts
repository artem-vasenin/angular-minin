import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  search = '';

  constructor(
    public postsService: PostService,
    private title: Title,
  ) {
    title.setTitle('Posts List Page');
  }

  ngOnInit(): void {
  }

}
