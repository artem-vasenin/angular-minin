import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IPost} from '../app.component';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  form: FormGroup;
  title = '';
  text = '';

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();
  @ViewChild('titleInput', {static: false}) titleInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      text: new FormControl(''),
    });
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
