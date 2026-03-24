import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../blog-service';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private blogService = inject(BlogService);

  postTitle: string = '';
  postSummary: string = '';

  submitPosts() {
    this.blogService.addPost(this.postTitle, this.postSummary);
    console.log('sent');

    this.postTitle = '';
    this.postSummary = '';

    alert('Post Added Succesfully');
  }


  // get posts
  blogPosts = this.blogService.getPosts()
  removePost(index: number){
    this.blogService.deletePost(index)
  }
}
