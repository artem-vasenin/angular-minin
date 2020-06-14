import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IPost} from '../app.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      title: new FormControl('', Validators.required),
      text: new FormControl('', [Validators.required, Validators.minLength(10)]),
      countries: new FormControl('', Validators.required),
    });
  }

  addPost() {
    // if (this.text.trim() && this.title.trim()) {
    //   const post: IPost = {
    //     id: Date.now().toString(),
    //     title: this.title,
    //     text: this.text,
    //   };
    //   this.onAdd.emit(post);
    //   this.title = this.text = '';
    // }
    if (this.form.valid) {
      console.log(this.text.trim() && this.title.trim());
    } else {
      console.log('invalid');
    }
  }
}
