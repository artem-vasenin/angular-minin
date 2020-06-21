import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IPost} from '../../app.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  form: FormGroup;

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();
  @ViewChild('titleInput', {static: false}) titleInputRef: ElementRef;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', [Validators.required, Validators.minLength(10)]),
      countries: new FormControl('', Validators.required),
    });
  }

  addPost() {
    if (this.form.valid) {
      this.postService.addPost({
        title: this.form.value.title,
        text: this.form.value.text,
        id: Date.now().toString(),
      });
    } else {
      console.error('invalid');
    }
  }
}
