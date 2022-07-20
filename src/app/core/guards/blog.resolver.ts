import { Resolve } from '@angular/router';
import { Posts } from '@features/blog/models/post';
import { map, Observable } from 'rxjs';
import { AssetsService } from '@core/services/assets.service';
import { PostDto } from '@features/blog/models/post.dto';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogResolver implements Resolve<Posts> {
  private blogConfigUrl = 'blog/blog.config.json';

  constructor(private assetsService: AssetsService) {}

  resolve(): Observable<Posts> {
    return this.assetsService
      .loadFile$<PostDto[]>(this.blogConfigUrl)
      .pipe(
        map(rawPosts => rawPosts.map(rawPost => ({ ...rawPost, date: new Date(rawPost.date) })))
      );
  }
}
