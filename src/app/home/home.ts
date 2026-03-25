import { Component, inject } from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { BlogService } from '../blog-service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [BlogCard, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private blogService = inject(BlogService);

  blogPosts = this.blogService.getPosts();

  searchTerm: string = '';

  get filteredPosts() {
    return this.blogPosts.filter((post) =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }
}
