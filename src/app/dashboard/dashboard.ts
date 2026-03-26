import { Component, inject, signal } from '@angular/core';
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
  imageUrl: string = '';

  showSuccessMessage = signal(false);

  activeTab: string = 'overview';

  switchTab(tabName: string) {
    this.activeTab = tabName;
  }

  submitPosts() {
    this.blogService.addPost(this.postTitle, this.postSummary, this.imageUrl);
    console.log('sent');

    this.postTitle = '';
    this.postSummary = '';
    this.imageUrl = '';

    this.showSuccessMessage.set(true);

    setTimeout(() => {
      this.showSuccessMessage.set(false);
    }, 3000);
  }

  clear() {
    this.postTitle = '';
    this.postSummary = '';
    this.imageUrl = '';
  }

  // get posts
  blogPosts = this.blogService.getPosts();
  removePost(index: number) {
    this.blogService.deletePost(index);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        console.log('image converted succesfully');
      };
      reader.readAsDataURL(file);
    }
  }
}
