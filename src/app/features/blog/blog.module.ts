import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '@features/blog/blog.component';
import { BlogRoutingModule } from '@features/blog/blog-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule]
})
export class BlogModule {}
