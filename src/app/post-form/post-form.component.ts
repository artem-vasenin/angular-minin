import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IPost} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: IPost = {
        id: Date.now().toString(),
        title: this.title,
        text: this.text,
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
}
