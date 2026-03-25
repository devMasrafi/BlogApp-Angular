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
  postSummary: string = ''

  submitPosts() {
    this.blogService.addPost(this.postTitle, this.postSummary, this.imageUrl);
    console.log('sent');

    this.postTitle = '';
    this.postSummary = '';
    this.imageUrl = ''

    alert('Post Added Succesfully');
  }

  clear(){
    this.postTitle = ''
    this.postSummary = ''
  }


  // get posts
  blogPosts = this.blogService.getPosts()
  removePost(index: number){
    this.blogService.deletePost(index)
  }


  imageUrl : string = ''

  onFileSelected ( event: any) {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e: any) => {
        this.imageUrl = e.target.result
        console.log('image converted succesfully');
        
      }
      reader.readAsDataURL(file)
    }
  }
}
