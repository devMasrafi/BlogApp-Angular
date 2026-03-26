import { Component, inject, OnInit } from '@angular/core'; 
import { BlogCard } from '../blog-card/blog-card';
import { BlogService } from '../blog-service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [BlogCard, RouterLink, FormsModule, SlicePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private blogService = inject(BlogService);

  blogPosts = this.blogService.getPosts();
  searchTerm: string = '';

  currentCarouselIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      if (this.blogPosts.length > 0) {
        
        this.currentCarouselIndex = (this.currentCarouselIndex + 1) % this.blogPosts.length;
      }
    }, 4000);
  }

  get filteredPosts() {
    return this.blogPosts.filter((post) =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }
}