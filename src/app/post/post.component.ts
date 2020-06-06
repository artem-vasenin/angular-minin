import {Component} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  {
  title = 'Post component';
  imgNg = 'https://i09.fotocdn.net/s108/8e2c8aea5a2895c7/public_pin_l/2363267384.jpg';
  imgVue = 'https://images.universe.com/3ec98038-5c4f-4c14-9f38-3975ea9027af/-/progressive/yes/-/inline/yes/';
  imgStyles = {width: '200px', height: '200px'};

  constructor() {
    setTimeout(() => {
      this.imgNg = this.imgVue;
    }, 5000);
  }
}
