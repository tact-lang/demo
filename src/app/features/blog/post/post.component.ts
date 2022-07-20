import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Post } from '@features/blog/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() post!: Post;

  constructor() {}
}
