import { Component, inject } from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { BlogService } from '../blog-service';

@Component({
  selector: 'app-home',
  imports: [BlogCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private blogService = inject(BlogService);

  blogPosts = this.blogService.getPosts();
}
