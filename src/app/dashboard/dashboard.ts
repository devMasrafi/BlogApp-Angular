import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogService } from '../blog-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, AngularEditorModule],
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

  editingIndex: number | null = null;
  isEditModalOpen = false;

  blogPosts = this.blogService.getPosts();

  switchTab(tabName: string) {
    this.activeTab = tabName;
  }

  submitPosts() {
    if (this.editingIndex !== null) {
      // update existing post
      this.blogService.updatePost(
        this.editingIndex,
        this.postTitle,
        this.postSummary,
        this.imageUrl,
      );
      this.editingIndex = null;
    } else {
      // add new post
      this.blogService.addPost(this.postTitle, this.postSummary, this.imageUrl);
    }

    this.clear();
    this.showSuccessMessage.set(true);
    setTimeout(() => this.showSuccessMessage.set(false), 3000);
  }

  clear() {
    this.postTitle = '';
    this.postSummary = '';
    this.imageUrl = '';
  }

  removePost(index: number) {
    this.blogService.deletePost(index);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imageUrl = e.target.result);
      reader.readAsDataURL(file);
    }
  }

  // MODAL EDIT FUNCTIONS
  openEditModal(index: number) {
    const post = this.blogPosts[index];
    this.postTitle = post.title;
    this.postSummary = post.summary;
    this.imageUrl = post.image;

    this.editingIndex = index;
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.editingIndex = null;
    this.clear();
  }

  submitEditPost() {
    if (this.editingIndex !== null) {
      this.blogService.updatePost(
        this.editingIndex,
        this.postTitle,
        this.postSummary,
        this.imageUrl,
      );
      this.closeEditModal();
    }
  }
}