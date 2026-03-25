import { Component, inject } from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { BlogService } from '../blog-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [BlogCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private blogService = inject(BlogService);

  blogPosts = this.blogService.getPosts();
}
