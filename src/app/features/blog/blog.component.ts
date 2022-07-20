import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, Posts } from '@features/blog/models/post';
import { GroupedPosts } from '@features/blog/models/grouped-posts';
import { tuiPure } from '@taiga-ui/cdk';
import { dateComparator } from '@core/utils/comparators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  public posts: Posts;

  @tuiPure
  public get groupedPosts(): GroupedPosts {
    const groups: Record<number, Post[]> = {};

    this.posts.forEach(post => {
      const year = post.date.getFullYear();
      const group = groups[year];

      if (group) {
        group.push(post);
      } else {
        groups[year] = [post];
      }
    });

    const groupsArray = Object.entries(groups).map(([key, value]) => ({
      year: Number(key),
      posts: value.sort((post1, post2) => dateComparator('desc')(post1.date, post2.date)) as Posts
    }));

    return groupsArray.sort((group1, group2) => group2.year - group1.year);
  }

  constructor(route: ActivatedRoute) {
    this.posts = (route.snapshot.data as { posts: Posts }).posts;
  }
}
